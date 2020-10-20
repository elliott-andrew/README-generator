const fs = require("fs");
const inquirer = require("inquirer");
const api = ("./api")
const generateMarkdown = require("./generateMarkdown");
const { title } = require("process");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub name?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your project name?"

    },
    {
        type: "list",
        name: "license",
        message: "What kind of license will you use?",
        choices: ["MIT", "None"]
    }
];

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(response);
    })
}

// function call to initialize program
init();