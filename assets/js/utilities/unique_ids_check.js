import data from "../../../cosas_referencia/Marvel Cinematic Universe-checklist.json" with { type: "json" };

const allIds = [];

// Recorremos tu estructura de "Memory Card"
data.sagas.forEach(saga => {
  // Opcional: allIds.push(saga.id); // Por si quieres revisar también los IDs de las Sagas
  saga.seasons.forEach(season => {
    allIds.push(season.id);
    season.episodes.forEach(ep => {
      allIds.push(ep.id);
    });
  });
});

// Filtramos los duplicados
const duplicates = allIds.filter((id, index) => allIds.indexOf(id) !== index);

if (duplicates.length > 0) {
  // Usamos Set para no repetir el aviso del mismo ID si aparece 3 veces
  console.log("⚠️ Duplicados encontrados:", [...new Set(duplicates)]);
} else {
  console.log("✅ ¡Todo limpio! No se encontraron IDs duplicados en seasons ni episodes.");
  console.log(`Total de IDs analizados: ${allIds.length}`);
}