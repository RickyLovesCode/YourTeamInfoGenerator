const inquirer = require('inquirer');
const fs = require("fs");
const path = require("path");
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generatePage = require('./src/pageTemplate')




//PROMPTS FOP MANAGER INFO
const promptManager = () => {
    return inquirer.prompt([{

        type: 'input',
        name: 'name',
        message: "what is the manager's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('please enter a name!');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'id',
        message: 'what is the manager id number?',
        validate: id => {
            if (id) {
                return true;
            } else {
                console.log('please enter id number');
                return false;
            };

        }


    },
    {
        type: 'input',
        name: 'email',
        message: 'what is the manager email?'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'please enter a office number'
    },
    {
        type: 'list',
        name: 'role',
        message: 'would you like to add another employee to your team?',
        choices: ["Engineer", "Intern"],
        validate: roleInput => {
            if (roleInput) {
                return true;
            } else {
                console.log('please choose a role')
                return false;
            }
        }
    }

    ])
}

const promptEngineer = () => {
    return inquirer.prompt([{

        type: 'input',
        name: 'name',
        message: "what is the Engineer's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('please enter a name!');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'id',
        message: "what is the Engineer's ID number?",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('please enter a id number!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: "please enter the Engineer's email"
    },
    {
        type: 'input',
        name: "enter the engineer's github",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('please enter the github name')
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'role',
        message: 'would you like to add another employee to your team?',
        choices: ["Engineer", "Intern"],
        validate: roleInput => {
            if (roleInput) {
                return true;
            } else {
                console.log('please choose a role')
                return false;
            }
        }
    }

    ])
};

const promptIntern = () => {
    return inquirer.prompt([{

        type: 'input',
        name: 'name',
        message: "what is the Intern's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('please enter a name!');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'id',
        message: "what is the Intern's ID number?",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('please enter a id number!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: "please enter the Intern's email"
    },
    {
        type: 'input',
        name: "enter the Intern's school",
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('please enter the school name')
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'role',
        message: 'would you like to add another employee to your team?',
        choices: ["Engineer", "Intern"],
        validate: roleInput => {
            if (roleInput) {
                return true;
            } else {
                console.log('please choose a role')
                return false;
            }
        }
    }

    ])
};



// promptManager()
//     .then(promptEngineer)
//     .then(promptIntern);

//

//Create a function to write a file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}


//and this function!  is to 'init'ialize the prompts, and user answers, AND TO PRINT THE PAGE!!
function init() {
    inquirer.prompt(questions)
        .then(userAnswers => {
            console.log('creating your README now')
            writeToFile('NewReadme.md', generateMarkdown({ ...userAnswers }))
        })
}