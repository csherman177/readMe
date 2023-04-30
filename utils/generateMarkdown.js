// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//shields.io = website for badges
function renderLicenseBadge(license) {
  if (license==="MIT") { 
    return "![MIT](https://img.shields.io/badge/license-MIT-green)";
  }
  else if (license==="Apache") { 
    return "![Apache](https://img.shields.io/badge/apache-license-yellow)";
  }
  else if (license==="NPM") { 
    return "![NPM](https://img.shields.io/badge/npm-license-green)"
  }
  else if (license==="N/A") {
    return [""]
  }
};



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//choosealicense.com
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://choosealicense.com/licenses/mit/#"
  }
  else if (license==="Apache") { 
    return "https://choosealicense.com/licenses/apache-2.0/";
  }
  else if (license==="NPM") { 
    return "https://choosealicense.com/licenses/bsl-1.0/"
  }
  else if (license==="N/A") {
    return ['']
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "N/A") {
  return [''];
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## Title: ${data.title} 
  ${data.license} <br/>
     ${renderLicenseBadge(data.license)} <br/>
     ${renderLicenseLink(data.license)} <br/>
     ${renderLicenseSection(data.license)} <br/>
  
  ## Description
    ${data.description}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#credits)
  - [License](#license)
  - [Contact Information](#license)
  
  ## Installation
   ${data.installation}
  
  ## Usage   
  ${data.usage}
  
  ## License
  ${data.license}
  
  ## How to Contribute
  ${data.contributor}
  
  ## Tests
  ${data.test}
  
  ## Contact Information
  ${data.gitHub}
  ${data.email}
`;
}

module.exports = generateMarkdown;
