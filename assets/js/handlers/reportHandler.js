// Generar separadores en el título del reporte
function generateSeparator(title, symmbol) {
    let separatorLength = Math.ceil(title.length / 4);
    separatorLength = separatorLength > 0 ? separatorLength : 1;
    const separator = symmbol.repeat(separatorLength);
    return separator;
}

// Generar título principal del reporte
function generateTitle(title,symmbol) {
    const separator = generateSeparator(title, symmbol);
    return `\n${separator} ${title} ${separator}\n`;
}

// Generar margenes en los títulos secundarios del reporte
function generateMargins(title, symmbol) {
    return symmbol.repeat((title.length)-2);
}

// Generar título secundario del reporte
function generateSecondaryTitle(title, symmbol) {
    const secondaryTitle = generateTitle(title, symmbol);
    const margins = generateMargins(secondaryTitle, symmbol);
    return `${margins}${secondaryTitle}${margins}\n\n`;
}

// Generar el reporte en formato de texto
function generateTextReport(checklistData, checklistTitle) {
    const title = generateTitle(checklistTitle, '*');
    let report = `${title}\n`;
    
    for (const saga of checklistData) {
        const sagaTitle = generateSecondaryTitle(saga.saga, '=');
        report += sagaTitle;
        
        for (const season of saga.seasons) {
            const seasonTitle = generateSecondaryTitle(season.label, '-');
            report += seasonTitle;
            
            if (season.episodes) {
                for (const episode of season.episodes) {
                    //const status = episode.completed ? '✅' : '❌'; version original, con problemas para visualizar emojis en chrome de android
                    const status = episode.completed ? '[✓]' : '[ ]';
                    report += `  ${status} ${episode.label}\n`;
                }
            }
            report += '\n';
        }
        report += '\n';
    }
    
    return report;
}

// Exportar el reporte en formato de texto
export function exportTextReport(checklistData, checklistTitle) {
    const report = generateTextReport(checklistData, checklistTitle);
    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `${checklistTitle}-report.txt`;
    link.click();
    
    URL.revokeObjectURL(url);
}