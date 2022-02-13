const inquirer = require('inquirer');
const fs = require("fs");
const path = require("path");




//PROMPTS FOP EMPLOYEE INFO
const promptUser = () => {
    return inquirer.prompt([{

        type: 'input',
        name: 'name',
        message: 'what is the employee name?',
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
        type: 'list',
        name: 'role',
        message: 'what is the employee role?',
        choices: ["Engineer", "Intern", "Manager"],
        validate: roleInput => {
            if (roleInput) {
                return true;
            } else {
                console.log('please choose a role')
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'id',
        message: 'what is the employee id number?',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('please enter id number');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'email',
        message: 'what is the employee email?'
    },

    ])
}

promptUser();

