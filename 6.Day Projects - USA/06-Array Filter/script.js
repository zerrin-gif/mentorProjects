/*
  You are given a program that logs pairings between two students group
  It fails because the array `pairsById` can contain different values that break the program
  It is decided that array items which are not pairs should be filtered out
*/
var pairsByIndexRaw = [[0, 3], [1, 2], [2, 1], null, [1], false, [3, 0], "whoops"];

var students = ["Islam", "Lesley", "Harun", "Rukmini"];
var mentors = ["Daniel", "Irina", "Mozafar", "Luke"];
function  pairsByIndex(arr){
  return arr.filter(element => {
    if(typeof element === "object" && element !== null && element.length === 2 ){
      return true;
      }
  })
  }
console.log(pairsByIndex(pairsByIndexRaw));

var pairs = pairsByIndex(pairsByIndexRaw).map(function(indexes) {
  var student = students[indexes[0]];
  var mentor = mentors[indexes[1]];
  return [student, mentor];
});
console.log(pairs);