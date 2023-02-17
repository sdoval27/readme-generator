const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
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
        choices: ['MIT', 'Apache', 'GPL','none'],
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
    },

])
    .then((answers) => {
        const {title, description, installation, usage, contributing, tests, license, licenseBadge, gitUser, gitLink, email} = answers;
        const generateReadme = ( 
        `[![License: ${license}]()
        # ${title}
        
        # Table of Contents
        1. [Description](#description)
        2. [Installation](#installation)
        3. [Usage](#usage)
        4. [Contributing](#contributing)
        5. [Tests](#tests)
        6. [License](#license)
        7. [Questions](#questions)
        
        # Description:
        - ${description}
        
        # Installation:
        - ${installation}
        
        # Usage:
        - ${usage}
        
        # Contributing:
        - ${contributing}
        
        # Tests:
        - ${tests}
        
        # License:
        - ${license}
        
        # Questions:
        - [${gitUser}](${gitLink})
        - You can contact us at: ${email}`);

        fs.writeFile('clientREADME.md', generateReadme, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });
    