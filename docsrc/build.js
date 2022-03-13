const fs = require('fs');
const util = require('util');
const jet = require('./jet.min.js');

const readDirectory = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);


(async function () {

    const viewmodelDir = './docsrc/viewmodel/';
    const partialsDir = './docsrc/partials';
    const templatesDir = './docsrc/templates';
    const outputDir = './docs/';

    const vmString = await readFile(`${viewmodelDir}/viewmodel.json`).catch(error => console.log(error));
    const vm = JSON.parse(vmString);


    const partialfileNames = await readDirectory(partialsDir).catch(error => console.log(error));
    const templatefileNames = await readDirectory(templatesDir).catch(error => console.log(error));

    for (const fileName of partialfileNames) {
        const partialName = fileName.split('.')[0];
        const fileContents = await readFile(`${partialsDir}/${fileName}`).catch(error => console.log(error));
        vm.partials[partialName] = fileContents.toString();
    }

    // Resolve partial in partials.
    for (const partial of Object.keys(vm.partials)) {
        vm.partials[partial] = jet.compile(vm.partials[partial], vm);
    }

    for (const fileName of templatefileNames) {
        const fileContents = await readFile(`${templatesDir}/${fileName}`).catch(error => console.log(error));
        const template = fileContents.toString();

        renderTemplate = template.replace(/<!--dev[.\s\S]*end-->/gmi, "");

        await writeFile(`${outputDir}/${fileName}`, jet.compile(renderTemplate, vm));
    }
})();


