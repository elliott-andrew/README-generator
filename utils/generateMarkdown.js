// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
  ## Description
  ${response.description}
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
  ${response.questions}
  ## Contact
  Contact me by email at ${response.email}, or on GitHub at [@${response.github}](https://www.github.com/{response.github})
  `;
}

module.exports = generateMarkdown;
