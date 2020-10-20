const fs = require("fs");
const inquirer = require("inquirer");
const api = ("./api")
const generateMarkdown = require("./generateMarkdown");
const { title } = require("process");

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
        message: "How would you describe your project?"

    },
    {
        type: "input",
        name: "installation",
        message: "What should I know when installing this?"
    }, {
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
        type: "input",
        name: "tests",
        message: "How would a user test this?"
    },
    {
        type: "input",
        name: "questions",
        message: "Where should people contact your for questions?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
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