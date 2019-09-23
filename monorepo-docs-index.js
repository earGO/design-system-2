const path = require('path')
const colors = ['purple', 'pink', 'orange', 'green', 'blue', 'red']

const generateRow = (package, index) => `
  <a href="${path.join(package.name, 'index.html')}" class="package-row">
    <span class="title is-${colors[index % colors.length]}">
      ${package.name}
    </span>
    <span class="description">${package.description}</span>
  </a>
`

const generateHTML = (packages, result) => `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Storybooks</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="monorepo-index.css">
  </head>
  <body>
    <img class="banner" src="https://cdn.dribbble.com/users/43720/screenshots/4260415/ds_visual_1x.png" alt="Storybook"/>
    <div class="content">
      ${packages.map(generateRow).join('')}
    </div>
  </body>
  </html>
`

module.exports = function buildMonorepoIndex(packages, outputDir) {
  let index

  console.log('=> Building index.html for monorepo')

  return generateHTML(packages, result)
}
