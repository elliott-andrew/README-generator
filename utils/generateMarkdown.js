let newBadgeURL;

// function to generate markdown for README
function generateMarkdown(response) {
  badgeURL();
  function badgeURL() {
    let license = response.license;
    newBadgeURL = license.split(" ").join("%20");
  }
  return `
  
  ![Badge for License](https://img.shields.io/badge/License-${newBadgeURL}-green)

  # ${response.title}
  ## Description
  ${response.description}

  ## Table of Contents
  - [Installation](#Installation)
  - [Test](#Test)
  - [Start](#Start)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [License](#License)
  - [Questions](#Questions)

  ## Installation
  ${response.installation}

  ## Test
  ${response.test}

  ## Start
  ${response.start}

  ## Usage
  ${response.usage}

  ## Contributing
  ${response.contributing}

  ## License
  ${response.license}

  ## Questions
  Contact me by email at ${response.email}, or on GitHub at [@${response.github}](https://www.github.com/${response.github})`;
}

module.exports = generateMarkdown;
