const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML.js');

//dependencies required
const inquirer = require('inquirer');
const fs = require('fs')

const teamProfileArr = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the manager's name. (Required)",
            validate: namePrompt => {
                return namePrompt ? true : console.log("Please enter the valid manager's name.")
            }
        }, {
            type: 'input',
            name: 'employeeId',
            message: 'Enter the employee ID. (Required)',
            validate: employeeIdPrompt => {
                return employeeIdPrompt ? true : console.log("Please enter the valid employee ID.")
            }
        }, {
            type: 'input',
            name: 'email',
            message: 'Enter the email address. (Required)',
            validate: emailPrompt => {
                return emailPrompt ? true : console.log("Please enter the valid email address.")
            }
        }, {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter the office number. (Required)',
            validate: officeNumberPrompt => {
                return officeNumberPrompt ? true : console.log("Please enter the valid office number.")
            }
        }
    ])
        .then(promptData => {
            const manager = new Manager(promptData.name, promptData.employeeId, promptData.email, promptData.officeNumber);
            teamProfileArr.push(manager);
            choiceMenu();
        });
};

const choiceMenu = () => {
    return inquirer.prompt([{
        type: 'list',
        name: 'menu',
        message: 'Choice the following option to continue:',
        choices: ['add a new engineer', 'add a new intern', 'finish your profile']
    }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "add a new engineer":
                    promptEngineer();
                    break;
                case 'add a new intern':
                    promptIntern();
                    break
                case 'finish your profile':
                    finishPrompt();
                    console.log(`
                    ============================================================================
                    Your Team Profile Has Successfully Been Generated, Go Check The Output File.
                    ============================================================================
                    `)
                    break
            }
        });
};

const promptEngineer = () => {
    console.log(`
    ==================
    Add a New Engineer
    ==================`)

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the engineer's name. (Required)",
            validate: namePrompt => {
                return namePrompt ? true : console.log("Please enter the valid engineer's name.")
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter the employee ID. (Required)',
            validate: employeeIdPrompt => {
                return employeeIdPrompt ? true : console.log("Please enter the valid employee ID.")
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the email address. (Required)',
            validate: emailPrompt => {
                return emailPrompt ? true : console.log("Please enter the valid email address.")
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter the GitHub username. (Required)',
            validate: emailPrompt => {
                return emailPrompt ? true : console.log("Please enter the valid GitHub username.")
            }
        }
    ])
        .then(promptData => {
            const engineer = new Engineer(promptData.name, promptData.employeeId, promptData.email, promptData.github);
            teamProfileArr.push(engineer);
            choiceMenu();
        })
};

const promptIntern = () => {
    console.log(`
        ================
        Add a New Intern
        ================ `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the intern's name. (Required)",
            validate: namePrompt => {
                return namePrompt ? true : console.log("Please enter the valid intern's name.")
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter the employee ID. (Required)',
            validate: employeeIdPrompt => {
                return employeeIdPrompt ? true : console.log("Please enter the valid employee ID.")
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the email address. (Required)',
            validate: emailPrompt => {
                return emailPrompt ? true : console.log("Please enter the valid email address.")
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter your school name. (Required)',
        }
    ])
        .then(promptData => {
            const intern = new Intern(promptData.name, promptData.employeeId, promptData.email, promptData.school);
            teamProfileArr.push(intern);
            choiceMenu();
        })
};

const finishPrompt = () => {
    fs.writeFileSync('./output/teamprofile.html', generateHTML(teamProfileArr))
}

promptManager()