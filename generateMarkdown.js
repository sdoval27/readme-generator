// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {

        case 'MIT':
            // What do you want to have happen now?
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            break;
        case 'Apache':
            // What do you want to have happen now?
            renderLicenseBadge(license)
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            break;

            break;
        case 'GPL':
            renderLicenseBadge
            return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
        case 'none':
            // what do you want to have happen when there's no license selected?
            return '';
            break;
    }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'none') {
        return '';
    }

    switch (license) {
        case 'none':
            // what do you want to have happen when there's no license selected?
            return '';
            break;
        case 'MIT':
            // What do you want to have happen now?
            renderLicenseBadge(license)
        default:
            break;
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

    //const title = data.title;
    //const description = data.description;
    // and so on... the long way

    // destructure your constants from your answers object here; it's called data because that's the nameyou gave your parameter
    const { title, description, installation, usage, contributing, tests, license, gitUser, gitLink, email } = data;

    //[![License: ${license}]()

    const markdownText = `
${renderLicenseBadge(license)}
# ${title}

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [License](#license)
7. [Questions](#questions)

## Description:
- ${description}

## Installation:
- ${installation}

## Usage:
- ${usage}

## Contributing:
- ${contributing}

## Tests:
- ${tests}

## License:
- ${license}

## Questions:
- Visit my github at: ${gitUser}
- You can contact me at: ${email}
- Questions about this project? Visit this project's repository [here](${gitLink}).
`;

    // return the markdown text here
    return markdownText;
};

module.exports = generateMarkdown;


/*

*/
