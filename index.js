
const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        message: 'Please enter name.',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Please enter your location.',
        name: 'location',
    },
    {
        type: 'input',
        message: 'Please talk about yourself.',
        name: 'bio',
    },
    {
        type: 'input',
        message: 'Please enter your LinkedIn URL.',
        name: 'linkedIn',
    },
    {
        type: 'input',
        message: 'Please enter your GitHub URL.',
        name: 'github',
    },
    {
        type: 'list',
        message: 'What is your favorite pet?',
        name: 'favoritePet',
        choices: ['Cat', 'Dog', 'Fish', 'Guinea Pig', 'Hedgehog']
    }
])
    .then((data) => {
        console.log(data)
        const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
    <link rel="stylesheet" href="./assets/css/style.css">
          <title>${data.name}'s Portfolio</title>
    </head>
      <body>
          <div class="container">
              <header class="header">
                  <h1>Welcome to ${data.name}'s Portfolio</h1>
              </header>
              <section class="main-info">
                  <h2>${data.name}</h2>
                  <p>Location: ${data.location}</p>
                  <p>${data.bio}</p>
                  <p>LinkedIn: <a href="${data.linkedin}">${data.linkedin}</a></p>
                  <p>GitHub: <a href="${data.github}">${data.github}</a></p>
              </section>
              <footer class="footer">
                  <p>Portfolio generated using Node.js and Inquirer.js</p>
              </footer>
          </div>
      </body>
      </html>
      `;
        writeFile(htmlContent);
    }
    );




function writeFile(htmlContent) {
    fs.writeFile('index.html', htmlContent, (err) =>
        err ? console.error(err) : console.log('Success!')
    )
};
