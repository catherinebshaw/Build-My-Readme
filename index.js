const inquirer = require('inquirer')
const fs = require('fs')
const generateREADME = require("./utils/generateMarkdown")

//function generate README(answers)

// const generateREADME = (answers) =>{
//     return `# ${answers.title}
  
//   ## Introduction  
  
//   ${answers.introduction}
  
//   ## Table of Contents
  
//   *[Description](#Description)
  
//   *[Installation](#Installation)
  
//   *[Usage](#Usage)
  
//   *[Contribution Guidelines](#Contributing)
  
//   *[Test Instructions](#testing)
  
//   *[Licenses](#licenses)
  
//   *[Mock Up](#Mockup)
  
//   *[Live Site](#LiveSite)
  
//   ## Description
  
//   ${answers.description}
  
//   ## Installation
  
//   ${answers.installation}
  
//   ## Usage
  
//   ${answers.usage}
  
//   ## Test Instructions
  
//   ${answers.testing}
  
//   ## Licenses 
  
//   ${answers.license}
  
//   ## Mock Up 
  
//   ![Mock Up](${answers.mockup})
  
//   ## Live Site
//   [${answers.title}](${answers.link})
//   `;
//   }

async function main() {
console.log( ` getting input  `)
    
    const response = await inquirer.prompt(
    [
        {
        type: 'input',
        name: 'title',
        message: 'What is the title of your README?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description of your application',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please list the specific installation instructions for your application. If none apply, please say NA',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Briefly describe what the user will experience when using your application',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Briefly describe how you would like other to contribute to your program. If not applicable, please reply NA', 
    },
    {   type: 'list',
        name: 'license',
        message: "Is there an appropriate license for your application?", 
        choices: ['MIT', 'BSD 2.0', 'None' ],
    },
    {   type: 'input',
        name: 'testing',
        message: 'Are there any instructions for testing the site? if not applicable, please indcate NA'
    },
    {   type:   'input',
        name: 'mockup',
        message: 'Is there an image src you would like to use as a mock up?',
    },  
    {  
        type: 'input',
        name: 'username',
        message: 'What is your github username?'
    },
    {  
        type: 'input',
        name: 'name',
        message: 'What is your first and last name?'
    },
    {  
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {  
        type: 'input',
        name: 'repository',
        message: 'What is your github repository name?'
    },
])
  
           
console.log(` our response is`, response)
//add responses to readme file
const output = generateREADME ( response )
//write to a file(writeFileSync)
fs.writeFileSync('readme.md', output)

}

    main()
    
    