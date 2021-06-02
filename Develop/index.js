
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require ("fs");
const utils = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileSync = utils.promisify(fs.writeFile)

// TODO: Create an array of questions for user input
const questions = [

      {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'Title'
    },
    
    {
      type: 'input',
      message: 'What is your name?',
      name: 'Your name',
      
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
        name:'Instructions'
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

  

  
];

// TODO: Create a function to write README file
function writeToFile (fileName, data){
fs.writeFile(fileName, data , function(error) {
  console.log(data)
  
  if(error){
      return console.log(error)
  } else {
      console.log ("No errors here")
  }
    
})};

// // TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)
 .then(function(data){
     writeToFile("Readme.md", generateMarkdown(data));
     console.log(data)
 })


// try{
// const answers = await questions()
// const generate = markdown(answers)
// await writeFileSync ('./New/README.md', generate)
// }catch(error){
// console.log(error)
}

// Function call to initialize app
init();
