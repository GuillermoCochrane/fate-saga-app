
import fs from 'fs';
import path from 'path';

// Load the JSON source (Adjust path if needed)
const jsonPath = './Fate-checklist.json';
const outputDir = './fate';

// Master list trackers
const masterImports = [];
const masterExports = [];

// Helper: Convert string to camelCase
function toCamelCase(str) {
  return str
    .replace(/[^a-zA-Z0-9 ]/g, "") // Remove special chars
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase()
    )
    .replace(/\s+/g, "");
}

// Helper: Sanitize variable names (cannot start with number, etc)
function sanitizeVarName(str) {
  let name = toCamelCase(str);
  if (/^\d/.test(name)) name = "_" + name; // Prefix if starts with number
  return name;
}

// Helper: Generate ID-based var name for exports
function getVarNameFromId(id) {
    return id.replace(/-/g, "_");
}

// Helper: object data builder
function objetDataBuilder(object, key, indent = "  ") {
  return `${indent}${key}: ${JSON.stringify(object[key])},\n`;
}

// Helper: episode data generator
function episodeGenerator(episodes) {
  let episodesContent = "";
  let episodeVars = [];

  if (episodes) {
    for (const episode of episodes) {
      const epVarName = getVarNameFromId(episode.id);
      episodeVars.push(epVarName);
          
      // Reconstruct object string
      episodesContent += `export const ${epVarName} = {\n`;
      
      const labelKeys = ['label', 'romaji', 'jp', 'es'];
      const labelObj = {};
      
      // First pass: Handle non-label keys
      for (const key in episode) {
          if (!labelKeys.includes(key)) {
              episodesContent += objetDataBuilder(episode, key, "  ");
          } else {
             // Store for later
             labelObj[key] = episode[key];
          }
      }
      
      // Second pass: Construct nested label object if needed
      if (Object.keys(labelObj).length > 0) {
          episodesContent += `  label: {\n`;
          // Defined order: en (from label), romaji, jp, es
          if (labelObj.label) episodesContent += `    en: ${JSON.stringify(labelObj.label)},\n`;
          if (labelObj.romaji) episodesContent += `    romaji: ${JSON.stringify(labelObj.romaji)},\n`;
          if (labelObj.jp) episodesContent += `    jp: ${JSON.stringify(labelObj.jp)},\n`;
          if (labelObj.es) episodesContent += `    es: ${JSON.stringify(labelObj.es)},\n`;
          episodesContent += `  },\n`;
      }

      episodesContent += `};\n\n`;
    }
  }
  return {episodesContent: episodesContent, episodeVars: episodeVars};
};

// helper: season data generator
function seasonGenerator(season, episodeVars, seasonFileName) {
  let seasonContent = `import { ${episodeVars.join(", ")} } from "./${seasonFileName}/episodes.js";\n\n`;
  seasonContent += `export const ${seasonFileName} = {\n`;
  for (const key in season) {
    if (typeof season[key] !== 'object') {
      seasonContent += objetDataBuilder(season, key, "  ");
    } else {
      seasonContent += `  ${key}: [\n    ${episodeVars.join(", ")}\n  ],\n`;
    }
  }
  seasonContent += `};\n`;
  return seasonContent;
}

// Helper: saga data generator
function sagaGenerator(saga, seasonImports, seasonExports, sagaDirName) {
  let sagaIndexContent = `${seasonImports.join('\n')}\n\n`;
  sagaIndexContent += `export const ${sanitizeVarName(sagaDirName)} = {\n`;
  for (const key in saga) {
    if (typeof saga[key] !== 'object') {
      sagaIndexContent += objetDataBuilder(saga, key, "  ");
    } else {
      sagaIndexContent += `  ${key}: [\n    ${seasonExports.join(",\n    ")}\n  ],\n`;
    }
  }
  sagaIndexContent += `};\n`;
  return sagaIndexContent;
}

console.log(`🚀 Starting generation from ${jsonPath}...`);

const rawData = fs.readFileSync(jsonPath);
const checklist = JSON.parse(rawData);

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

let unknownSagas = 0;
checklist.sagas.forEach(saga => {
    !saga.saga && unknownSagas++;
    const sagaName = saga.saga || "UnknownSaga"+unknownSagas;
    // Manual overrides for known directory names to match existing structure if needed
    // Example: Fate/Zero -> fateZero
    const sagaDirName = toCamelCase(sagaName); 
    const sagaPath = path.join(outputDir, sagaDirName);

    console.log(`\n📂 Processing Saga: ${sagaName} -> ${sagaDirName}`);

    if (!fs.existsSync(sagaPath)) {
        fs.mkdirSync(sagaPath, { recursive: true });
        console.log(`   Created dir: ${sagaPath}`);
    }

    const seasonImports = [];
    const seasonExports = [];

    if (saga.seasons) {
      for (const season of saga.seasons) {
            const seasonDirName = toCamelCase(season.id.replace('fate-','').replace('fgo-','')); // Simple heuristic to shorten
            const seasonFileName = sanitizeVarName(seasonDirName); // e.g. camelot1

            const seasonPath = path.join(sagaPath, seasonFileName);
            
            if (!fs.existsSync(seasonPath)) {
                fs.mkdirSync(seasonPath, { recursive: true });
            }

            // 1. Generate episodes.js
            const {episodesContent, episodeVars} = episodeGenerator(season.episodes);
            fs.writeFileSync(path.join(seasonPath, 'episodes.js'), episodesContent);

            // 2. Generate Wrapper File (e.g. camelot1.js) inside the saga folder (Wait, previous pattern was: saga/seasonName.js is the wrapper? 
            const seasonContent = seasonGenerator(season, episodeVars, seasonFileName);
            const wrapperFilePath = path.join(sagaPath, `${seasonFileName}.js`);
            fs.writeFileSync(wrapperFilePath, seasonContent);

            seasonImports.push(`import { ${seasonFileName} } from "./${sagaDirName}/${seasonFileName}.js";`);
            seasonExports.push(seasonFileName);
        }
    }
    // 3. Update/Create Saga Index File (e.g. fate/fateGrandOrder.js)
    const sagaIndexContent = sagaGenerator(saga, seasonImports, seasonExports, sagaDirName);
    const sagaIndexName = `${sanitizeVarName(sagaDirName)}.js`;
    fs.writeFileSync(path.join(outputDir, sagaIndexName), sagaIndexContent);
    console.log(`   📝 Generated Saga Index: ${sagaIndexName}`);

    // Add to Master List
    const verifiedSagaVarName = sanitizeVarName(sagaDirName);
    masterImports.push(`import { ${verifiedSagaVarName} } from "./fate/${sagaIndexName}";`);
    masterExports.push(verifiedSagaVarName);
});

// 4. Generate Master Package File
console.log("\n📦 Generating Master Package (fate-checklist-master.js)...");
let masterContent = `${masterImports.join('\n')}\n\n`;
masterContent += `export const fateChecklist = {\n`;

// Dynamic Master Object Construction
for (const key in checklist) {
    if (key === 'sagas') {
        // Special handling for the aggregated sagas list
        masterContent += `  sagas: [ ${masterExports.join(', ')} ],\n`;
    } else {
        // Use the builder for standard fields (franchise, author, year, etc.)
        masterContent += objetDataBuilder(checklist, key, "  ");
    }
}
masterContent += `};\n`;

fs.writeFileSync('fate-checklist-master.js', masterContent);
console.log("   ✅ Created fate-checklist-master.js");

console.log("\n✅ Generation Complete!");