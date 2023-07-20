const util = require('util');
const fs = require('fs');
const Shape = require('./lib/shapes');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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

function promptQuestion(question) {
    return new Promise(resolve => {
        rl.question(question.message, answer => {
            resolve({ [question.name]: answer });
        });
    });
}

async function init() {
    try {
        const answers = {};
        for (const question of questions) {
            Object.assign(answers, await promptQuestion(question));
        }

        const userLogo = new Shape(answers.text, answers.textcolor, answers.shape, answers.shapecolor);
        await writeToFile('./examples/logo.svg', userLogo.render());

        rl.close(); // Close the readline interface after all questions are answered
    } catch (err) {
        console.log(err);
    }
}

init();