const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "email",
      message: "Enter a email.",
    },
    {
      type: "input",
      name: "username",
      message: "Enter a user name.",
    },
    {
      type: "input",
      name: "title",
      message: "Enter a title.",
    },
    {
      type: "input",
      name: "description",
      message: "Enter a description.",
    },
    {
      type: "input",
      name: "installation",
      message: "Enter your installation instructions.",
    },
    {
      type: "input",
      name: "usage",
      message: "Enter usage information.",
    },
    {
      type: "input",
      name: "license",
      message: "Enter your license information."
    },
    {
      type: "input",
      name: "contribution",
      message: "Enter your contribution guidelines.",
    },
    {
      type: "input",
      name: "test",
      message: "Enter your Test Instructions.",
    },
  ]);
};


// defining writeToFile that has two parameters fileName and data
const writeToFile = (fileName, data) => {
  return writeFileAsync(fileName, data);
  r;
};

// create a function that takes the answers and returns a string that looks like md
function generateMarkdown(data) {
  return `
# ${data.title}
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
# Description
${data.description}
# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
# Installation
${data.installation}
# Usage
${data.usage}
# License
${data.license}
# Contributing
​${data.contribution}
# Tests
${data.test}
# Questions
If you have any questions about the repo, open an issue or contact ${data.username} directly ${data.email}.
`;
}

// made variable to define init and using async with a implicit return
const init = async () => {
  try {
    console.log("Answer the following questions to generate README");

    const answers = await promptUser();

    // what is this supposed to do
    // take the array of answers return a string the represent markdown
    const fileContent = generateMarkdown(answers);

    // create a readme.md file on the computer
    await writeToFile("./created/README.md", fileContent);

    console.log("read me created");
  } catch (err) {
    console.error("Error, file not created!");
    console.log(err);
  }
};

init();
