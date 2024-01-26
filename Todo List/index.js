import inquirer from 'inquirer';
let list = ["Wake up", "Say Fajar Prayer", "Recite Quran"];
async function displayList() {
    console.log("Here is the ToDo List : ");
    for (const [index, value] of list.entries()) {
        console.log(index + 1, ":", list[index]);
    }
}
async function addTodo(todo) {
    list.push(todo);
}
async function removeTodo(index) {
    if (index >= 0 && index < list.length) {
        list.splice(index, 1);
    }
    else {
        console.log("Enter valid index");
    }
}
async function updateTodo(index, todo) {
    if (index >= 0 && index < list.length) {
        list.splice(index, 1, todo);
    }
    else {
        console.log("Enter valid index");
    }
}
async function Process() {
    let options = await inquirer.prompt({
        name: "option",
        type: "list",
        message: "What you want to do : ",
        choices: ["Add Todo", "Remove Todo", "Update Todo"]
    });
    switch (options.option) {
        case "Add Todo":
            let add = await inquirer.prompt({ name: "add", type: "input", "message": "Enter the todo : " });
            addTodo(add.add);
            displayList();
            break;
        case "Remove Todo":
            let remove = await inquirer.prompt({ name: "remove", type: "number", message: "Enter the number of index to remove" });
            removeTodo(remove.remove - 1);
            displayList();
            break;
        case "Update Todo":
            let initial = await inquirer.prompt({ name: "initial", type: "number", message: "Enter the number of index to remove" });
            let final = await inquirer.prompt({ name: "final", type: "input", "message": "Enter the todo to add: " });
            updateTodo(initial.initial - 1, final.final);
            displayList();
            break;
    }
}
async function main() {
    displayList();
    await Process();
}
main();
