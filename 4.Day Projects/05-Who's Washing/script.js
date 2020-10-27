// let name1 = 'Ben';
// let name2 = 'Jenny';
// let name3 = 'Michael';
// let name4 = 'Chloe';
// let name5 = 'Timmy';
let names = ['Ben', 'Jenny', 'Michael', 'Chloe', 'Timmy'];
console.log(names);
function whoIsWashing(arr){
  let random = Math.floor(Math.random() * arr.length);
  return arr[random];
}
console.log(whoIsWashing(names) + ' is washing the dishes today.');
names.push("Max");
console.log(whoIsWashing(names) + ' is washing the dishes today.');
// let getwhoIsWashing = () => {
//     if (random == 0) {
//       return 'Ben';
//     } else if (random == 1) {
//       return 'Jenny';
//     } else if (random == 2) {
//       return 'Michael';
//     } else if (random == 3) {
//       return 'Chloe';
//     } else if (random == 4) {
//       return 'Timmy';
//     }
//   }
// console.log((names) + ' is washing the dishes.');
let arrNeighbour = ["Patrick", "AnnMarie", "Alisol", "Walton"];
console.log(whoIsWashing(arrNeighbour) + ' is washing the dishes in neighbours\' house.');
