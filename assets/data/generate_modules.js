
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
function objetDataBuilder(object,key) {
  return `${[key]}: ${object[key]},\n`;
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
      for (const key in episode) {
          episodesContent += objetDataBuilder(episode,key);
      }
      episodesContent += `};\n\n`;
    }
  }
  return {episodesContent: episodesContent, episodeVars: episodeVars};
};

// helper: season data generator
function seasonGenerator(season, episodeVars, seasonFileName) {
  const seasonContent = `import { ${episodeVars.join(", ")} } from "./${seasonFileName}/episodes.js";`;
  seasonContent += `export const ${seasonFileName} = {\n`;
  for (const key in season) {
    if (typeof season[key] !== 'object') {
    seasonContent += objetDataBuilder(season,key);
    } else {
      seasonContent += `${[key]}: ${episodeVars.join(", ")},\n`;
    }
    seasonContent += `};\n\n`;
  }
  return seasonContent;
}

// Helper: saga data generator
function sagaGenerator(saga, seasonImports, seasonExports) {
  const sagaIndexContent = `${seasonImports.map(i => i.replace(`"./${sagaDirName}/`, `"./${sagaDirName}/`)).join('\n')}`
  sagaIndexContent += `export const ${sanitizeVarName(sagaDirName)} = {\n`;
  for (const key in saga) {
    if (typeof saga[key] !== 'object') {
      sagaIndexContent += objetDataBuilder(saga,key);
    } else {
      sagaIndexContent += `${[key]}: ${seasonExports.join(",\n    ")},\n`;
    }
  }
  sagaIndexContent += `};\n\n`;
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
    const sagaIndexContent = sagaGenerator(saga, seasonImports, seasonExports);
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
const masterContent = `${masterImports.join('\n')}

export const fateChecklist = {
  franchise: "Fate",
  sagas: [ ${masterExports.join(', ')} ]
};
`;

fs.writeFileSync('fate-checklist-master.js', masterContent);
console.log("   ✅ Created fate-checklist-master.js");

console.log("\n✅ Generation Complete!");