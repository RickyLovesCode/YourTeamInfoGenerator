const inquirer = require('inquirer');


const { writeFile, copyFile } = require('./utils/generate-site');
const generate = require('./src');


//PROMPTS FOP EMPLOYEE INFO
const promptUser = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'what is the emplyee name?',
        message: 'what is the employee i.d?',
        message: "what is this employee's Email?",
        message: "what is this employee job position?",

    }])
}