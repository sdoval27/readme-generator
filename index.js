const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
},
{
    type: 'input',
    message: 'How would you describe your project?',
    name: 'description',
},
{
    type: 'input',
    message: 'What are the installation instructions?',
    name: 'installation',
},
{
    type: 'input',
    message: 'How can users interact with this site?',
    name: 'usage',
},
{
    type: 'input',
    message: 'Who else contributed in this project?',
    name: 'contributing',
},
{
    type: 'input',
    message: 'Describe how to run tests for this project.',
    name: 'tests',
},
{
    type: 'list', //figure out how to put license badge in here
    message: 'Which of these licenses did you use?',
    choices: ['MIT', 'Apache', 'GPL', 'none'],
    name: 'license',
},
{
    type: 'input',
    message: 'What is your github username?',
    name: 'gitUser',
},
{
    type: 'input',
    message: 'What is your professional email address?',
    name: 'email',
}
];


// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
    .then((answers) => {
        
        // pass your answers object into the generateMarkdown function here
        const returnedMarkdown = generateMarkdown(answers);

        // TODO: Create a function to write README file
        fs.writeFile('clientREADME.md', returnedMarkdown, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });
}

// Function call to initialize app
init();