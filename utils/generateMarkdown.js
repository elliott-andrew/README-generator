// function to generate markdown for README
function generateMarkdown(response) {
  return `
  ![Badge for License](https://img.shields.io/badge/License-${response.license}-green)
  
  # ${response.title}
  ## Description
  ${response.description}

  ## Table of Contents
  - [Usage](#Usage)
  - [Test](#Test)
  - [Installation](#Installation)
  - [Contributing](#Contributing)
  - [License](#License)
  - [Questions](#Questions)

  ## Usage
  ${response.usage}

  ## Test
  ${response.test}

  ## Installation
  ${response.installation}

  ## Contributing
  ${response.contributing}

  ## License
  ${response.license}

  ## Questions
  Contact me by email at ${response.email}, or on GitHub at [@${response.github}](https://www.github.com/${response.github})`;
}

module.exports = generateMarkdown;
