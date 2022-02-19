const fs = require('fs');
const util = require('util');
const jet = require('./jet.min.js');

const readDirectory = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);


(async function () {
    const vm = { partials: {} };

    const partialsDir = './docsrc/partials';
    const templatesDir = './docsrc/templates';
    const outputDir = './docs/';

    const partialfileNames = await readDirectory(partialsDir).catch(error => console.log(error));
    const templatefileNames = await readDirectory(templatesDir).catch(error => console.log(error));

    for (const fileName of partialfileNames) {
        const partialName = fileName.split('.')[0];
        const fileContents = await readFile(`${partialsDir}/${fileName}`).catch(error => console.log(error));
        vm.partials[partialName] = fileContents.toString();
    }

    for (const fileName of templatefileNames) {
        const fileContents = await readFile(`${templatesDir}/${fileName}`).catch(error => console.log(error));
        const template = fileContents.toString();
        await writeFile(`${outputDir}/${fileName}`, jet.compile(template, vm));
    }
})();


