// let result = arrCase1.filter(sortAges => sortAges.includes('string', 'numbers', 'boolean' ));
// function sortAges(arrCase1){
//   arrCase1.sort();
// }
// console.log(arrCase1.sort());
// arrCase1.pop();
// arrCase1.pop();
// console.log(arrCase1.sort());
// function  sortAges(arr){
// let sortArr = [];
//   for(let i= 0 ; i < arr.length ; i++){
//     if(typeof arr[i] === "number"){
//     sortArr.push(arr[i]) ;
//     }
//   }
// return sortArr.sort((a, b) => a - b) ;
// }
// console.log(sortAges(arrCase1));
// function  sortAges(arr){
//   let sortArr = [];
//     arr.forEach(element => {
//       if(typeof element === "number"){
//         sortArr.push(element) ;
//         }
//     })
//     return sortArr.sort((a, b) => a - b) ;
//     }
//   console.log(sortAges(arrCase1));
// function  sortAges(arr){
//     return arr.filter(element => {
//       if(typeof element === "number"){
//         return true;
//         }
//     })
//     }
//   console.log(sortAges(arrCase1).sort((a, b) => a - b));
  function  sortAges(arr){
    return arr.filter(element => typeof element === "number")  }
  console.log(sortAges(arrCase1).sort((a, b) => a - b));
