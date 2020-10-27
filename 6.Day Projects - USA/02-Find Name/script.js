/* 
  You are given an array of names.
*/

var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];
let result = names.filter(name => name.length > 7 && name[0] === 'A') ;
console.log(result);
let result1 = names.filter(name =>  name[0] !== 'A') ;
console.log(result1);



/* EXPECTED OUTPUT */
// "Alexandra"
