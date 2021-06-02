
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require ("fs");
const markdown = require ("./utils/generateMarkdown")
const utils = require("util")
const writeFileSync = utils.promisify(fs.writeFile)

// TODO: Create an array of questions for user input
function questions () {
    inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'Your name',
      
    },

    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'Project name'
    },
    {
        type: 'input',
        message: 'What do you want in your table of contents?',
        name: 'TOC'
    },
    {
        type: 'input',
        message: 'Describe your project!',
        name: 'Description'
    },
    {
        type: 'input',
        message: 'What installation instructions do you have for users?',
        name: 'Instructions'
    },
    {
        type: 'input',
        message: 'Who contributed to the project?',
        name: 'contr'
    },
    {
        type: 'input',
        message: 'What ways can this project be used?',
        name: 'Usage'
    },
    {
        type: 'input',
        message: 'What required licenses are there?',
        name: 'licenses'
    },
    {
        type: 'input',
        message: 'What is the name of your Github?',
        name: 'Github'
    }
  ])
  
  

  
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  
    
}

// // TODO: Create a function to initialize app
async function init() {
try{
const answers = await questions()
const generate = markdown(answers)
await writeFileSync ('./New/README.md', generate)
}catch(error){
console.log(error)
}}

// Function call to initialize app
init();
