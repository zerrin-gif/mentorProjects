/*
  You are given a list of some London street names.

  Write a function that will return all street names which contain 'Lane' in their name.
*/
let streets = ["Abchurch Lane", "Adam's Court", "Addle Hill", "Addle Lane", "Alban Highwalk"];
function getLanes(streets){
return streets;
}
console.log(streets);
const result = streets.filter(getLanes => getLanes.includes('Lane'));
console.log(result);

// let result = streets.filter(function(value){
//   return value.includes('Lane')})
//   console.log(result);