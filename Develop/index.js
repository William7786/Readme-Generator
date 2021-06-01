
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
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
        message: 'What is the name of your Github?',
        name: 'Github'
    }
  ])
  
  

  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
