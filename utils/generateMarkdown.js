function generateMarkdown(data) {
  return `
# ${data.title}
![License(https://img.shields.io/badge/license-MIT-blue.svg)
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
${data.contribution}
# Tests
${data.test}
# Questions
If you have any questions about the repo, open an issue or contact ${data.username} directly ${data.email}.
`;
}

module.exports = generateMarkdown;
