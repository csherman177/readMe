const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require('./utils/generateMarkdown.js')


// TODO: Create an array of questions for user input
const questions = [     
    {
        type: 'input',
        message: 'What is your title?',
        name: 'title'
    },

    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation directions for your project.'
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information for your project.'
    },

    {
        type: 'input',
        name: 'test',
        message: 'Provide test instructions for your project..'
    },

    {
        type: 'input',
        name: 'contributor',
        message: 'Name all constributors for this project.'
    },

    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your Git Hub username?'
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },

    {
        type: 'list',
        name: 'license',
        choices: ['MIT', 'Apache', 'NPM', 'N/A']
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
     fs.writeFile(fileName, data, (err)=> {
         if (err) {
             console.log('error')
         }
         else console.log('success');
     });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=> {
        console.log(answers)
        writeToFile('README.md',markDown(answers));
    })
}

// Function call to initialize app
init();
