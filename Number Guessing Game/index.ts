import inquirer from "inquirer";
import chalk from 'chalk';

console.log(chalk.bold.underline.red("Welcome To the Number Guessing game"));
let randomNumber:number = Math.floor(Math.random()*100)

const playerName = await inquirer.prompt({
    name: "name",
    type: "input",
    message: "Enter your name here: "
});

console.log(chalk.blueBright(`Welcome my dear ${playerName.name} to the Number Guessing Game`));

const gameFunc = async () => {
    let readyToPlay = await inquirer.prompt({
        name: "ready",
        type: "list",
        message: "Are you ready to play:",
        choices: ["Yes", "No"]
    });

    if (readyToPlay.ready === "Yes") {
        let score: number = 100;
        let gn: number = -1;

        while (gn !== randomNumber) {
            let guessedNumber = await inquirer.prompt({
                name: "guessedNumber",
                type: 'number',
                message: chalk.bgWhite("Guess the number (1-100) (Max 20 attempts): ")
            });

            gn = guessedNumber.guessedNumber;

            if (guessedNumber.guessedNumber > randomNumber) {
                console.log(chalk.bgRed("Sorry, The guessed number is greater than the actual number"));
                score -= 5;
            } else if (guessedNumber.guessedNumber < randomNumber) {
                console.log(chalk.bgRed("Sorry, The guessed number is smaller than the actual number"));
                score -= 5;
            }

            if (guessedNumber.guessedNumber === randomNumber) {
                console.log(chalk.bold.underline.italic.bgGreen.black("So Smart! You predicted right. ", randomNumber));
                console.log(chalk.bold.underline.italic.bgBlue.black("Your score is:", score, ' out of 100'));
                break;
            }
        }
    } else {
        console.log(chalk.green("Allah Hafiz! See you next time"));
    }
};

gameFunc();