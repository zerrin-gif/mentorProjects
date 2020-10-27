
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
const countriesLength = [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5];
const countriesCodes = ['ALB','BOL','CAN','DEN','ETP','FIN','GER','HUN','IRL', 'JPN','KNY'];
for(const country of countries){
  console.log(country,countriesCodes,country.length, );
};
// myOddArray = myNum.map((num) => {
//   if(num % 25 != 0) {
//     return num;  
//   }
// })
// console.log(myOddArray);
// Add "-" after every even number
const numbers = "315469781318158";
function evenNumbers(num) {
  if(typeof num === 'number') {
    let str = num.toString();
    let a = "";
    for(var i=0; i< str.length; i++) {
      if(parseInt(str[i]) % 2 == 0 && i !== str.length - 1) {
        a = a + str[i] + "-";
      } else {
        a += str[i];
      }
    }
    return a;
  } else {
    return "It is not a number";
  }
}
console.log(evenNumbers(315469781318158));
// Find odd numbers
 var arr = [5, 24, 122, 625, 3125, 15625];
// let myNum =[5, 24, 122, 625, 3125, 15625];
 let myOddArray = arr.filter(function(arr) {
  return arr % 25 === 0;
});
console.log(myOddArray);

// :flushed:
// 1
