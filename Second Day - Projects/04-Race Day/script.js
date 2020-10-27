//let raceNumber = Math.random() * 1000;
let earlyAdult = true;
if (earlyAdult){
    console.log("it is true");
} else {
    console.log("it is false");
}
let age = 15; 
let raceNumber = 700; 
if (age > 18 && raceNumber > 1000){
 console.log(`Early adults run at 9:30 am`);
} else if (age > 18 && raceNumber !== 1000){
 console.log(`Late adults run at 11:00 am`);
} else if (age < 18 && raceNumber < 1000){
 console.log(`Others run at 12:30 pm`);
} else{
 console.log(`See the registration desk`);
}