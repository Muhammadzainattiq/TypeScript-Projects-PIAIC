import inquirer from "inquirer";
import chalk from 'chalk';
// // Here is the calculator
console.log(chalk.bold.bgBlue.white("ZAIN'S CALCULATOR IS HERE :"));
let questions = [
    {
        name: 'num1',
        type: 'number',
        message: "enter the no 1 : "
    },
    {
        name: 'num2',
        type: 'number',
        message: "enter the no 2 : "
    },
    {
        name: 'operators',
        type: 'list',
        choices: ["+", "-", "*", "/", "**", "%"],
        message: "Enter the operation you want to perform : "
    }
];
let answers = inquirer.prompt(questions);
answers.then((answer) => {
    switch (answer.operators) {
        case "+":
            console.log(chalk.blue.bgWhite.bold.underline(`${answer.num1} + ${answer.num2} = ${answer.num1 + answer.num2} Answer.`));
            break;
        case "-":
            console.log(chalk.green.bgWhite.bold.underline(`${answer.num1} - ${answer.num2} = ${answer.num1 - answer.num2} Answer.`));
            break;
        case "*":
            console.log(chalk.yellow.bgWhite.bold.underline(`${answer.num1} * ${answer.num2} = ${answer.num1 * answer.num2} Answer.`));
            break;
        case "%":
            console.log(chalk.grey.bgWhite.bold.underline(`${answer.num1} % ${answer.num2} = The remainder will be : ${answer.num1 % answer.num2} Answer.`));
            break;
        case "**":
            console.log(chalk.black.bgWhite.bold.underline(`${answer.num1} ** ${answer.num2} = ${answer.num1 ** answer.num2} Answer.`));
            break;
        default:
            break;
    }
});
answers.catch((error) => {
    console.log("Error", error);
});
