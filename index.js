const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    question: 'What is the title of your project?',
    name: 'title',
},
{
    type: 'input',
    question: 'Describe the general purpose of this project.',
    name: 'description',
},
{
    type: 'input',
    question: 'What are the installation instructions?',
    name: 'installation',
},
{
    type: 'input',
    question: 'How can users interact with this site?',
    name: 'usage',
},
{
    type: 'input',
    question: 'Who else contributed in this project?',
    name: 'contributing',
},
{
    type: 'input',
    question: 'What is your github?',
    name: 'tests',
},
{
    type: 'list', //figure out how to put license badge in here
    question: 'Which of these licenses did you use?',
    choices: ['MIT', 'Apache', 'GPL', 'none'],
    name: 'license',
},
{
    type: 'input',
    question: 'What is your github username?',
    name: 'gitUser',
},
{
    type: 'input',
    question: 'What is the link to your github repository?',
    name: 'gitLink',
},
{
    type: 'input',
    question: 'What is your professional email address?',
    name: 'email',
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
    .then((answers) => {
        
        // pass your answers object into the generateMarkdown function here
        const returnedMarkdown = generateMarkdown(answers);

        
        fs.writeFile('clientREADME.md', returnedMarkdown, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });
}

// Function call to initialize app
init();