const fs = require("fs");
const inquirer = require("inquirer");
const api = ("./api")
const generateMarkdown = require("./generateMarkdown");
const { title } = require("process");
inquirer.registerPrompt('suggest', require('inquirer-prompt-suggest'));

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"

    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project:"

    },
    {
        type: "suggest",
        name: "installation",
        message: "What command should I run to install dependencies?",
        suggestions: ['npm i']
    },
    {
        type: "input",
        name: "usage",
        message: "Any usage examples?"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license will you use?",
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Are there contributing notes?"
    },
    {
        type: "suggest",
        name: "test",
        message: "What command should be run to run tests?",
        suggestions: ["npm test"]
    },
    {
        type: "input",
        name: "questions",
        message: "Contact for questions?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
];

// function to write README file

function writeToFile(response) {
    let fileName = "README.md";
    fs.writeFile(fileName, JSON.stringify(response, null, "\t"),
        function (err) {
            if (err) {
                return console.log(err);
            } console.log("Success!")
        })

}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
        writeToFile(response);
    })
}

// function call to initialize program
init();