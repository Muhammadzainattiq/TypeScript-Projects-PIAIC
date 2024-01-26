import inquirer from 'inquirer';
import chalk from 'chalk';

let Balance:number = 0;
let userId = "";
let userPin = "";
async function displayMoney(){
  console.log(chalk.green((`
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*                               #                                   * * *
*                       ###############                             *   *
*                      ##       #                                   *   *
*                     ##        #                                   *   *
*                      ##       #                                   *   *
*                       ##############                              *   *
*                               #     ##                            *   *
*                               #      ##                           *   *
*                               #     ##                            *   *
*                      ###############                              *   *
*                               #                                   *   *
*                                                                   *   *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *   *
  *                                                                     *
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * `                                                                                                                        
)))
}
async function setupAccount(){

  let setId = await inquirer.prompt({
    name: "id",
    type: 'input',
    message: "Set your account id : "
  });
   userId = setId.id

  let setUserPin = await inquirer.prompt({
    name: "Pin",
    type: "number",
    message: "Set your account user pin: "
  });
  userPin = setUserPin.Pin
}
async function login() {

let askId = await inquirer.prompt({
  name: "id",
  type: "input",
  message: "Enter your Id : "
});

let askPin = await inquirer.prompt({
  name: "Pin",
  type: "number",
  message: "Enter your Pin code : "
});
return  (askId.id === userId&& askPin.Pin == userPin)
}

async function displayOptions(){

let options = await inquirer.prompt({name:'option',
type:"list",
message:"What you want to do : ",
choices:["Cash Widthdrawl", "Cash Transfer", "Balance Inquiry", "Change Card Setting"]})
switch (options.option){
    case "Cash Widthdrawl":
        let amount = await inquirer.prompt({name:"amount",type:"input",message:"Enter amount to withddraw :"})
        Balance = Balance - amount.amount
        displayMoney()
        console.log(`Your remaining Balance is ${Balance} RS.`)
        break
    case "Cash Transfer" :
        let amountT = await inquirer.prompt({name:"amountT",type:"number",message:"Enter amount to Transfer :"})
        Balance = Balance + amountT.amountT
        displayMoney()
        console.log(`Your Balance is now ${Balance} RS.`)
        break 
    case "Balance Inquiry":
        console.log(`You have ${Balance} RS in your account.`);
        break
    case "Change Card Setting":
        let setting = await inquirer.prompt({name:"setting",type:"list",message:"What you want to do :", choices:["Change UserId", "Change UserPin"]})
        if (setting.setting == "Change UserId"){
            let oldId = await inquirer.prompt({name: "oldId", type: 'input',message: 'Enter the old user Id'})
            if (oldId.oldId == userId){
              let newUserId = await inquirer.prompt({name:"newUserId",type:'input',message : "Enter the new user Id : "})
              userId = newUserId.newUserId
              console.log("Your new User Id is set : ", userId);
            }
            

        }
        else if (setting.setting == "Change UserPin"){
          let oldPin= await inquirer.prompt({name: "oldPin", type: 'input',message: 'Enter the old user Pin'})
          if (oldPin.oldPin == userPin ){
            let newUserPin = await inquirer.prompt({name:"newUserPin",type:'input',message : "Enter the new user PIN : "})
            userPin=newUserPin.newUserPin
            console.log("Your new User Pin is set : ", userPin);}
        }
        break
}
}

async function runMachine(){
  await setupAccount()
  if (await login()){
    await displayOptions()
  }else{console.log("You have entered the wrong credentials");
  }
}
runMachine()








 