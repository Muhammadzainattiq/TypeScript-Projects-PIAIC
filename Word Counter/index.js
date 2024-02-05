import inquirer from "inquirer";
import chalk from 'chalk';
class WordCounter {
    static countWordsAndCharacters(input) {
        const words = input.split(/\s+/).filter(word => word.length > 0);
        const characters = input.replace(/\s/g, '');
        return { words: words.length, characters: characters.length };
    }
}
const validateInput = (input) => {
    if (!input.trim()) {
        return "Please enter a non-empty paragraph.";
    }
    return true;
};
const userInput = await inquirer.prompt({
    name: "input",
    type: 'input',
    message: 'Enter the Paragraph',
    validate: validateInput
});
console.log(userInput.input);
const result = WordCounter.countWordsAndCharacters(userInput.input);
console.log(`Number of Words: `, chalk.bgBlueBright.bold(`${result.words}`));
console.log(`Number of Characters (excluding whitespaces):v`, chalk.bgBlueBright.bold(`${result.characters}`));
