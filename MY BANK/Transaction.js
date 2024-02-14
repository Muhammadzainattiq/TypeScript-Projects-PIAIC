import inquirer from "inquirer";
export class Transaction {
    transactionId;
    date;
    amount;
    transactionFee;
    transactionType;
    constructor(amount, transactionType) {
        this.transactionId = Transaction.generateTransactionId();
        this.date = new Date().toLocaleDateString();
        this.amount = amount;
        this.transactionFee = amount * (0.01);
        this.transactionType = transactionType;
    }
    static generateTransactionId = () => Math.floor(1000000000 + Math.random() * 9000000000);
    static async generateTransaction() {
        let questions = [
            { name: "transactionType", type: "list", message: "Enter the transaction Type : ", choices: ["Deposit", "Withdraw", "Transfer", "Pay Bill", "Pay Challan"] }, { name: "amount", type: "number", message: "Enter the amount: " }
        ];
        let answers = await inquirer.prompt(questions);
        return new Transaction(answers.amount, answers.transactionType);
    }
    showRecepient() {
        console.log("Transaction Successfully Done!");
        console.log("________________________________________________________________________________________________");
        console.log("Transaction Details:");
        console.log("Transaction ID:", this.transactionId);
        console.log("Date:", this.date);
        console.log("Amount:", this.amount);
        console.log("Transaction Fee:", this.transactionFee);
        console.log("Transaction Type:", this.transactionType);
        console.log("________________________________________________________________________________________________");
    }
}
