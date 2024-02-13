import inquirer from "inquirer";
import chalk from 'chalk';
const apiLink = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";
const fetchQuiz = async () => {
    try {
        let data = await fetch(apiLink);
        let jsonData = await data.json();
        let questions = await jsonData.results;
        let questionAnswers = questions.map(question => ({ question: question.question, options: [...question.incorrect_answers, question.correct_answer], correct: question.correct_answer }));
        return questionAnswers;
    }
    catch (error) {
        console.log("Error: ", error);
    }
};
const startQuiz = async () => {
    let score = 0;
    let name = await inquirer.prompt({
        name: "name",
        type: "input",
        message: "Enter your name: "
    });
    console.log(`WELCOME DEAR ${name.name.toUpperCase()}`);
    let questionAnswers = await fetchQuiz();
    if (!questionAnswers) {
        console.log("Unable to fetch quiz questions. Exiting...");
        return;
    }
    for (let i = 0; i < questionAnswers.length; i++) {
        console.log(questionAnswers[i].question);
        let answer = await inquirer.prompt({
            name: "answer",
            type: "list",
            message: "Select the Answer : ",
            choices: questionAnswers[i].options
        });
        if (answer.answer === questionAnswers[i].correct) {
            score++;
            console.log(chalk.bold.greenBright.underline("Correct Answer", `Your score : 
            ${score}`));
        }
        else {
            console.log(chalk.bgRed.black.bold.underline(`Wrong! Correct Answer: ${questionAnswers[i].correct}`));
            console.log("Better Luck Next Question.");
        }
    }
    console.log(chalk.bgBlueBright.bold.italic.underline(`You have got ${score} marks out of ${questionAnswers.length}`));
    console.log(chalk.bold.yellowBright("                    END  Of QUIZ                     "));
    console.log(chalk.bold.yellowBright("                     Allah Hafiz                      "));
};
startQuiz();
