const fs = require('fs');
const path = require('path');

const folderPath = './node_modules/@strudel.cycles';

function replaceRequireWithImport(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const replacedContent = fileContent.replace(/require\(/g, 'import(');
    fs.writeFileSync(filePath, replacedContent, 'utf8');
}

function processFilesInFolder(folderPath) {
    fs.readdirSync(folderPath).forEach(file => {
        const filePath = path.join(folderPath, file);
        const stats = fs.statSync(filePath);
        if (stats.isFile()) {
            replaceRequireWithImport(filePath);
        } else if (stats.isDirectory()) {
            processFilesInFolder(filePath);
        }
    });
}

processFilesInFolder(folderPath);
