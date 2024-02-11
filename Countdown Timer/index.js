// class CountdownTimer {
//     endTime: number;
//     private intervalId: NodeJS.Timeout | null
import inquirer from "inquirer";
//     constructor(duration: number) {
//         this.endTime = Date.now() + duration;
//         this.intervalId = null;
//     }
//     start() {
//         if (this.intervalId === null) {
//             this.intervalId = setTimeout(() => {
//                 let currentTime = Date.now();
//                 let remainingTime = this.endTime - currentTime;
//                 if (remainingTime <= 0) {
//                     this.stop()
//                     console.log("Timer is expired");
//                 }
//                 else {
//                     console.log(`Remaining Time ${this.formatTime(remainingTime)}`);
//                 }
//             },1000)
//         }
//         else {
//             console.log("The Timer is already running");
//         }
//     }
//     stop() {
//     }
//     formatTime(time:number) {
//     }
// }
// class CountdownTimer{
//     endTime:number;
//     duration:number;
//     intervalId:NodeJS.Timeout | null;
//     constructor( duration:number){
//         this.duration = duration
//         this.endTime = this.getTime() + this.duration;
//         this.intervalId = null;
//     }
//     getTime():number{
//      let currentTime = Date.now()
//      return currentTime
//     }
//     getTimeDifference():number{
//         let timeDifference = this.endTime - this.getTime() 
//         return timeDifference
//     }
//     displayAfterIntervals(){
//     let timeDifference = this.getTimeDifference()
//     if (timeDifference >=0){
//         console.log("Timer Expired");
//         this.stopCountdown();
//     }
//     else{
//         let timeDiff = this.getTimeDifference()
//         console.log(this.formatTime(timeDiff));
//     }
//     }
//     static async getInput(){
//         let timerDuration = await inquirer.prompt([
//             {name:"hours",type:"number",message:"Enter number of hours"},
//             {name:"minutes",type:"number",message:"Enter number of minutes"},
//             {name:"seconds",type:"number",message:"Enter number of seconds"}
//         ])
//         let seconds = timerDuration.hours*3600*1000 + timerDuration.minutes * 60 *1000+ timerDuration.seconds *1000
//         return seconds
//     }
//     startCountdown(){
//     console.log("The countdown has started...");
//     this.intervalId = setInterval(()=>{
//     this.displayAfterIntervals();
// },1000)
//     }
// stopCountdown(){
//     if (this.intervalId){
//         clearInterval(this.intervalId)
//         this.intervalId = null;
//     }else{
//         console.log("No Timer is running.");
//     }
// }
// private formatTime(milliseconds: number): string {
//     const seconds = Math.floor(milliseconds / 1000) % 60;
//     const minutes = Math.floor(milliseconds / (1000 * 60)) % 60;
//     const hours = Math.floor(milliseconds / (1000 * 60 * 60)) % 24;
//     return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
// }
// }
// async function main(){
//     let durationTime =  await CountdownTimer.getInput()
//     let timer = new CountdownTimer(durationTime);
//     timer.startCountdown();
// }
// main()
class CountdownTimer {
    intervalId;
    endTime;
    constructor(duration) {
        this.endTime = Date.now() + duration;
        this.intervalId = null;
    }
    start() {
        if (this.intervalId === null) {
            this.intervalId = setInterval(() => {
                let currentTime = Date.now();
                let remainingTime = this.endTime - currentTime;
                if (remainingTime <= 0) {
                    console.log("Timer Expired");
                    this.stop();
                }
                else {
                    console.log(`Time remaining: ${this.formatTime(remainingTime)}`);
                }
            }, 1000);
        }
    }
    stop() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        else {
            console.log("The Timer is not running.");
        }
    }
    static async getInput() {
        let timerDuration = await inquirer.prompt([
            { name: "hours", type: "number", message: "Enter number of hours" },
            { name: "minutes", type: "number", message: "Enter number of minutes" },
            { name: "seconds", type: "number", message: "Enter number of seconds" }
        ]);
        let seconds = timerDuration.hours * 3600 * 1000 + timerDuration.minutes * 60 * 1000 + timerDuration.seconds * 1000;
        return seconds;
    }
    formatTime(milliseconds) {
        let seconds = Math.floor(milliseconds / 1000) % 60;
        let minutes = Math.floor(milliseconds / (1000 * 60)) % 60;
        let hours = Math.floor(milliseconds / (1000 * 3600)) % 24;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}
async function main() {
    let duration = await CountdownTimer.getInput();
    let timer = new CountdownTimer(duration);
    timer.start();
}
main();
