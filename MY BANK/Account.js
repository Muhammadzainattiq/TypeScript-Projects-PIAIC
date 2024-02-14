import { Customer } from "./Customer.js";
import { Transaction } from "./Transaction.js";
import inquirer from "inquirer";
export class Account {
    owner;
    balance;
    accountNo;
    accountType;
    transactionHistory;
    password;
    constructor(owner, accountType, password, balance) {
        this.owner = owner;
        this.balance = balance === undefined ? 0 : balance;
        this.accountNo = this.accountNo = Account.generateAccountNumber();
        ;
        this.accountType = accountType;
        this.transactionHistory = [];
        this.password = password;
    }
    static generateAccountNumber = () => Math.floor(1000000000 + Math.random() * 9000000000);
    static async createAccount() {
        let questions = [{ name: "accountType", type: "list", message: "Enter the Account Type: ", choices: ["Credit", "Debit"] },
            { name: 'balance', type: 'number', message: "Enter the initial Deposit : " },
            { name: 'password', type: 'input', message: "Enter your password" }];
        let owner = await Customer.createCustomer();
        const answers = await inquirer.prompt(questions);
        return new Account(owner, answers.accountType, answers.password, answers.amount);
    }
    async performTransaction() {
        let exit = false;
        while (!exit) {
            let transaction = await Transaction.generateTransaction();
            switch (transaction.transactionType) {
                case "Deposit":
                    this.balance = this.balance + transaction.amount - transaction.transactionFee;
                    transaction.showRecepient();
                    break;
                case "Withdraw":
                    this.balance = this.balance - transaction.amount - transaction.transactionFee;
                    transaction.showRecepient();
                    break;
                case "Transfer":
                    let transferInput = await inquirer.prompt({ name: "accountNo", type: "input", message: "Enter the account No you want to transfer the money to: " });
                    // Perform transfer logic
                    break;
                case "Pay Bill":
                    let billRefNo = await inquirer.prompt({ name: "refNo", type: "input", message: "Enter the ref No of the bill: " });
                    // Perform bill payment logic
                    break;
                case "Pay Challan":
                    let challanNo = await inquirer.prompt({ name: "challanNo", type: "input", message: "Enter the Challan No to pay: " });
                    // Perform challan payment logic
                    break;
            }
            let again = await inquirer.prompt({ name: 'again', type: 'list', message: "Do you want to do another transaction? :", choices: ["Yes", "Sign Out"] });
            if (again.again === "No") {
                exit = true;
            }
        }
    }
}
