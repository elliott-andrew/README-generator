// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title},
  ## Description,
  ${response.description},
  ## Usage,
  ${response.usage},
  ## Test,
  ${response.test},
  ## Installation,
  ${response.installation},
  ## Contributing,
  ${response.contributing},
  ## License,
  ${response.license},
  ## Questions,
  ${response.questions},
  ## Contact
  ${response.email} ${response.github}
  `;
}

module.exports = generateMarkdown;
