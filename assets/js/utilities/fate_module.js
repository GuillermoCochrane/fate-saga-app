
import fs from 'fs';
import path from 'path';

// --- CONFIGURATION ---
// const jsonPath = './a90.json';
// const outputDir = './p';
// const masterFilename = 'r.js';

// --- HELPERS: STRING & VAR NAMES ---
function toCamelCase(str) {
  return str
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase()
    )
    .replace(/\s+/g, "");
}

function sanitizeVarName(str) {
  let name = toCamelCase(str);
  if (/^\d/.test(name)) name = "_" + name;
  return name;
}

function getVarNameFromId(id) {
    return id.replace(/-/g, "_");
}

// --- HELPERS: FILE SYSTEM ---
function ensureDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    return true;
  }
  return false;
}

function saveFile(filePath, content, logMsg) {
  fs.writeFileSync(filePath, content);
  if (logMsg) console.log(logMsg);
}

// --- CORE GENERATORS (Logic remains largely the same) ---
function objetDataBuilder(object, key, indent = "  ") {
  return `${indent}${key}: ${JSON.stringify(object[key])},\n`;
}

function episodeGenerator(episodes) {
  let episodesContent = "";
  let episodeVars = [];

  if (episodes) {
    for (const episode of episodes) {
      const epVarName = getVarNameFromId(episode.id);
      episodeVars.push(epVarName);
      
      episodesContent += `export const ${epVarName} = {\n`;
      const labelKeys = ['label', 'romaji', 'jp', 'es'];
      const labelObj = {};
      
      for (const key in episode) {
        if (!labelKeys.includes(key)) {
          episodesContent += objetDataBuilder(episode, key, "  ");
        } else {
          labelObj[key] = episode[key];
        }
      }
      
      if (Object.keys(labelObj).length > 0) {
        episodesContent += `  label: {\n`;
        if (labelObj.label) episodesContent += `    en: ${JSON.stringify(labelObj.label)},\n`;
        if (labelObj.romaji) episodesContent += `    romaji: ${JSON.stringify(labelObj.romaji)},\n`;
        if (labelObj.jp) episodesContent += `    jp: ${JSON.stringify(labelObj.jp)},\n`;
        if (labelObj.es) episodesContent += `    es: ${JSON.stringify(labelObj.es)},\n`;
        episodesContent += `  },\n`;
      }
      episodesContent += `};\n\n`;
    }
  }
  return { episodesContent, episodeVars };
}

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

// --- SRP PROCESSORS ---

/**
 * Processes a single season: creates files and returns master-level metadata.
 */
function processSeason(season, sagaPath, sagaDirName) {
  const seasonDirName = toCamelCase(season.id.replace('fate-', '').replace('fgo-', ''));
  const seasonFileName = sanitizeVarName(seasonDirName);
  const seasonPath = path.join(sagaPath, seasonFileName);

  ensureDirectory(seasonPath);

  // 1. episodes.js
  const { episodesContent, episodeVars } = episodeGenerator(season.episodes);
  saveFile(path.join(seasonPath, 'episodes.js'), episodesContent);

  // 2. Wrapper file (e.g. camelot1.js)
  const seasonContent = seasonGenerator(season, episodeVars, seasonFileName);
  saveFile(path.join(sagaPath, `${seasonFileName}.js`), seasonContent);

  return {
    importStatement: `import { ${seasonFileName} } from "./${sagaDirName}/${seasonFileName}.js";`,
    exportName: seasonFileName
  };
}

/**
 * Processes a single saga: creates directory, processes seasons, and returns master trackers.
 */
function processSaga(saga, outputDir, unknownCount) {
  const sagaName = saga.saga || `UnknownSaga${unknownCount}`;
  const sagaDirName = toCamelCase(sagaName);
  const sagaPath = path.join(outputDir, sagaDirName);

  console.log(`\n📂 Processing Saga: ${sagaName} -> ${sagaDirName}`);
  if (ensureDirectory(sagaPath)) {
    console.log(`   Created dir: ${sagaPath}`);
  }

  const seasonImports = [];
  const seasonExports = [];

  if (saga.seasons) {
    for (const season of saga.seasons) {
      const { importStatement, exportName } = processSeason(season, sagaPath, sagaDirName);
      seasonImports.push(importStatement);
      seasonExports.push(exportName);
    }
  }

  // 3. Saga Index File
  const sagaIndexContent = sagaGenerator(saga, seasonImports, seasonExports, sagaDirName);
  const sagaIndexName = `${sanitizeVarName(sagaDirName)}.js`;
  saveFile(path.join(outputDir, sagaIndexName), sagaIndexContent, `   📝 Generated Saga Index: ${sagaIndexName}`);

  return {
    masterImport: `import { ${sanitizeVarName(sagaDirName)} } from "./fate/${sagaIndexName}";`,
    masterExport: sanitizeVarName(sagaDirName)
  };
}

/**
 * Generates the final master package.
 */
function processMaster(checklist, filename, masterImports, masterExports) {
  console.log(`\n📦 Generating Master Package (${filename})...`);
  let masterContent = `${masterImports.join('\n')}\n\n`;
  masterContent += `export const fateChecklist = {\n`;

  for (const key in checklist) {
    if (key === 'sagas') {
      masterContent += `  sagas: [ ${masterExports.join(', ')} ],\n`;
    } else {
      masterContent += objetDataBuilder(checklist, key, "  ");
    }
  }
  masterContent += `};\n`;

  saveFile(filename, masterContent, `   ✅ Created ${filename}`);
}

// --- MAIN ENTRY POINT ---
export function main(jsonPath, outputDir, masterFilename) {
  
  console.log(`🚀 Starting generation from ${jsonPath}...`);

  if (!fs.existsSync(jsonPath)) {
    console.error(`❌ Error: JSON file not found at ${jsonPath}`);
    return;
  }

  const rawData = fs.readFileSync(jsonPath);
  const checklist = JSON.parse(rawData);

  ensureDirectory(outputDir);

  const masterImports = [];
  const masterExports = [];
  let unknownSagas = 0;

  checklist.sagas.forEach(saga => {
    if (!saga.saga) unknownSagas++;
    const { masterImport, masterExport } = processSaga(saga, outputDir, unknownSagas);
    masterImports.push(masterImport);
    masterExports.push(masterExport);
  });

  processMaster(checklist, masterFilename, masterImports, masterExports);

  console.log("\n✅ Generation Complete!");
}

// Start execution
// main(jsonPath, outputDir, masterFilename  );