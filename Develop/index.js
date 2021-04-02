const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter a title.',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description.',
    },
    {
      type: 'input',
      name: 'installation instructions',
      message: 'Enter your installation instructions.',
    },
    {
      type: 'input',
      name: 'usage Info',
      message: 'Enter usage information.',
    },
    {
      type: 'input',
      name: 'contribution guidelines',
      message: 'Enter your contribution guidelines.',
    },
    {
      type: 'input',
      name: 'test instructions',      
      message: 'Enter your Test Instructions.',
    },
  ]);
};

const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();
