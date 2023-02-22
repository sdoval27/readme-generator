// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case 'MIT':
            // What do you want to have happen now?
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;
        case 'Apache':
            // What do you want to have happen now?
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';

            break;
        case 'GPL':
            return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
        case 'none':
            // what do you want to have happen when there's no license selected?
            return '';
            break;
    }

}
//add license to table of contents
function licenseToC(license) {
    if (license ==='none') {
        return '';
    } else {
        return `- [License](#license)`
    }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
        case 'MIT':
            // What do you want to have happen now?
            return 'https://opensource.org/licenses/MIT';
            break;
        case 'Apache':
            // What do you want to have happen now?
            return 'https://opensource.org/licenses/Apache-2.0';
            break;

            break;
        case 'GPL':
            return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
        case 'none':
            // what do you want to have happen when there's no license selected?
            return '';
            break;
    }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'none'){
        return '';
    } else {
        return `## License:
 [${license}](${renderLicenseLink(license)})`;
    }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const { title, description, installation, usage, contributing, tests, license, gitUser, gitLink, email } = data;

    const markdownText = `
${renderLicenseBadge(license)}
# ${title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
${licenseToC(license)}
- [Questions](#questions)

## Description:
 ${description}

## Installation:
 ${installation}

## Usage:
 ${usage}

## Contributing:
 ${contributing}

## Tests:
 ${tests}

${renderLicenseSection(license)}

## Questions:
 Visit my github at: ${gitUser}
 You can contact me at: ${email}
 Questions about this project? Visit this project's repository [here](${gitLink}).
`;

    // return the markdown text here
    return markdownText;
};

module.exports = generateMarkdown;
