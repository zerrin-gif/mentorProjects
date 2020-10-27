function calculateBMI(mass, height){
 return (mass / (height * height)).toFixed(0);
} 
console.log((`Mark's BMI is ${calculateBMI(90, 1.95)} and John's BMI is ${calculateBMI(100, 1.90)}`));
function bmiCheck(value, name){
  if (value < 18.5){
    return name + 'is underweight.';
  }else if(value <= 24.9){
    return name + 'is normalweight.';
  }else if(value <= 29.9){
    return name + 'is overweight.';
  }else{
    return name + 'is obese.';
  }
}
// let bmiWomen = bmiMen;
console.log(bmiCheck(15,'Jane'));

// function instRaceDay(){
// if (raceDay === 'early'){
//   return `you are early, go to start line.`;
// }else if (raceDay !== 'early'){
//   return `you are late, go to the front desk.`;
// }else {
//  return `wait for assistance`;
// }
// }
// raceDay = prompt('Are you early or late?');
// console.log(instRaceDay());

function studentGrade(name,note){
  return `my name is ${name} and my note is ${note}`;
}
let name = prompt('What is your name?');
let note = prompt('What is your note?');
console.log(studentGrade(name,note));