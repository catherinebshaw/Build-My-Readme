// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) =>
  license !== "none" ?
  `![Github license](https://img.shields.io/badge/license-${(encodeURI(license))}-brightgreen.svg)`:"";


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// const renderLicenseLink = (license) => 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// const renderLicense = (license) =>
  
//   license !== "" ?
//   `![${answers.license}](assets/${answers.license}.txt)`:'none';

// TODO: Create a function to generate markdown for README
const generateREADME = (answers) =>{
  return `# ${answers.title}

## Table of Contents

* [Description](#Description)

* [Installation](#Installation)

* [Usage](#Usage)

* [Contribution Guidelines](#Contributing)

* [Test Instructions](#testing)

* [Licenses](#licenses)

* [Questions](#Questions)

* [Mock Up](#Mock-Up)

* [Live Site](#Live-Site)

## Description

${answers.description}

## Installation

${answers.installation}

## Usage

${answers.usage}

## Contribution

${answers.contribution}

## Test Instructions

${answers.testing}

## Licenses 
${renderLicenseBadge(answers.license)}


## Questions

If you have any questions, please contact ${answers.user} by email or on GitHub: 

[${answers.email}](mailto:${answers.email}) 

[GitHub](https://github.com/${answers.github})

## Mock-Up 

![Mock Up](${answers.mockup})

`;
}

module.exports = generateREADME;
// ## Live-Site
// [${answers.title}](https://${answers.username}.github.io/${answers.repository}/)
