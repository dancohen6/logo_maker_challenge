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