import { Account } from "./Account.js";
import inquirer from "inquirer";
class Bank {
    name;
    accounts;
    constructor() {
        this.name = 'Z.A Bank';
        this.accounts = [];
    }
    async signIn() {
        let answers = await inquirer.prompt([{ name: "accountNo", type: "number", message: "Enter your account No: " },
            { name: "password", type: "input", message: "Enter your password : " }]);
        let account = this.accounts.find((val) => val.accountNo === answers.accountNo);
        if (!account) {
            console.log("Account not found");
            return undefined;
        }
        else {
            if (account.password !== answers.password) {
                console.log("Incorrect password");
                return undefined;
            }
            else {
                console.log("Successfully Signed in!");
                console.log("________________________________________________________________________________________________");
                await account.performTransaction();
            }
        }
    }
    async createAccount() {
        let account = await Account.createAccount();
        this.accounts.push(account);
        console.log("Account Successfully created.");
        console.log(`Your account no is : ${account.accountNo}`);
        console.log("________________________________________________________________________________________________");
    }
    async appInterface() {
        console.log("Welcome to the App of Z.A Bank.");
        let exit = false; // Variable to track whether the user wants to exit
        while (!exit) { // Loop until the exit flag is true
            let answer = await inquirer.prompt({ name: "choice", type: "list", message: "What's to do :", choices: ["Sign In", "Create a Account", "Exit"] });
            if (answer.choice === "Sign In") {
                await this.signIn();
            }
            else if (answer.choice === "Create a Account") {
                await this.createAccount();
            }
            else if (answer.choice === "Exit") {
                console.log("Thanks for Using!");
                exit = true; // Set the exit flag to true to break out of the loop
            }
        }
    }
}
async function main() {
    let bank = new Bank();
    await bank.appInterface();
}
main();
