// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` ${data.Title}
  ${data.name}
  #TOC
  + {installation}(#installation)
  + {usage}(#usage)
  + {liscense}(#liscense)
  + {contrabutions}(#contrabutions)
  + {tests}(#tests)
  + {Questions}(#questions)
  + {Installation}(installation)
 
  #Install 
  Install these to run this application.
  ${data.Instructions}
  #Usage
  To succsessfully run this app ${data.Usage}
  #License
  This project is under the ${data.licenses} license.
  #Contributers: ${data.cont}

`;
}

module.exports = generateMarkdown;
