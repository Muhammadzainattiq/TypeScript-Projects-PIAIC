import inquirer, { Question, QuestionCollection, Answers } from "inquirer";

export class Customer {
    name: string;
    age: number;
    address: string;
    cnic: number;
    contact: number;
    email: string;
    

    constructor(name: string, age: number, address: string, cnic: number, contact: number, email: string) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.cnic = cnic;
        this.contact = contact;
        this.email = email;
        
    }

    
    static async createCustomer(): Promise<Customer> {
        function validateName(input:any) {
            if (input.trim() === '') {
                return 'Name cannot be empty';
            }
            return true;
        }
        
        function validateAge(input:any) {
            if (isNaN(input)) {
                return 'Age must be a number';
            }
            return true;
        }
        
        function validateAddress(input:any) {
            if (input.trim() === '') {
                return 'Address cannot be empty';
            }
            return true;
        }
        
        function validateCNIC(input:any) {
            if (isNaN(input)) {
                return 'CNIC must be a number';
            }
            return true;
        }
        
        function validateContact(input:any) {
            if (isNaN(input)) {
                return 'Contact number must be a number';
            }
            return true;
        }
        
        function validateEmail(input:any) {
            // Regular expression to validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input)) {
                return 'Invalid email format';
            }
            return true;
        }
        
        
    const questions: QuestionCollection= [
        { type: 'input', name: 'name', message: 'Enter name:' },
        { type: 'number', name: 'age', message: 'Enter age:' },
        { type: 'input', name: 'address', message: 'Enter address:' },
        { type: 'number', name: 'cnic', message: 'Enter CNIC:' },
        { type: 'number', name: 'contact', message: 'Enter contact number:' },
        { type: 'input', name: 'email', message: 'Enter email:' },
    ];

    const answers: Answers = await inquirer.prompt(questions);
    return new Customer(answers.name, answers.age, answers.address, answers.cnic, answers.contact, answers.email);
}



    async updateInformation() {
        const fieldsToUpdate = await inquirer.prompt({
            type: 'checkbox',
            name: 'fieldsToUpdate',
            message: 'Select the fields you want to update:',
            choices: [
                { name: 'Name' },
                { name: 'Age' },
                { name: 'Address' },
                { name: 'CNIC' },
                { name: 'Contact' },
                { name: 'Email' },
                
            ]
        });

        const questions: Question[] = []; // Define questions as an array of inquirer.Question

        if (fieldsToUpdate.includes('Name')) {
            questions.push({
                type: 'input',
                name: 'name',
                message: 'Enter your new name:',
                default: this.name
            });
        }

        if (fieldsToUpdate.includes('Age')) {
            questions.push({
                type: 'number',
                name: 'age',
                message: 'Enter your new age:',
                default: this.age
            });
        }

        if (fieldsToUpdate.includes('Address')) {
            questions.push({
                type: 'input',
                name: 'address',
                message: 'Enter your new address:',
                default: this.address
            });
        }

        if (fieldsToUpdate.includes('CNIC')) {
            questions.push({
                type: 'number',
                name: 'cnic',
                message: 'Enter your new CNIC number:',
                default: this.cnic
            });
        }

        if (fieldsToUpdate.includes('Contact')) {
            questions.push({
                type: 'number',
                name: 'contact',
                message: 'Enter your new contact number:',
                default: this.contact
            });
        }

        if (fieldsToUpdate.includes('Email')) {
            questions.push({
                type: 'input',
                name: 'email',
                message: 'Enter your new email:',
                default: this.email
            });
        }
      

        const answers = await inquirer.prompt(questions);

        if (answers.name) {
            this.name = answers.name;
        }

        if (answers.age) {
            this.age = answers.age;
        }

        if (answers.address) {
            this.address = answers.address;
        }

        if (answers.cnic) {
            this.cnic = answers.cnic;
        }

        if (answers.contact) {
            this.contact = answers.contact;
        }

        if (answers.email) {
            this.email = answers.email;
        }

        console.log('Information updated successfully!');
    }
}





