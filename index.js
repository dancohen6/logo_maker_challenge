const util = require('util');
const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./lib/shapes');

const questions = [
    {
        message: 'Please enter a maximum of 3 characters to be displayed in your logo.',
        name: 'text'
    },
    {
        message: 'Please enter your desired text color.',
        name: 'textcolor'
    },
    {
        type: 'list',
        message: 'Please select the shape of your logo.',
        name: 'shape',
        choices: ['Square', 'Triangle', 'Circle']
    },
    {
        message: 'Please enter your desired background color.',
        name: 'shapecolor'
    }
];

async function writeToFile(fileName, data) {
    try {
        const writeFileAsync = util.promisify(fs.writeFile);
        await writeFileAsync(fileName, data);
        console.log("Please enjoy your dope new logo.");
    } catch (err) {
        console.log(err);
    }
}

async function init() {
    try {
        const data = await inquirer.prompt(questions);
        const userLogo = new Shape(data.text, data.textcolor, data.shape, data.shapecolor);
        await writeToFile('./examples/logo.svg', userLogo.render());
    } catch (err) {
        console.log(err);
    }
}

init();