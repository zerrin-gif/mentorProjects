
// let fibonacciNum = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584]
arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
function fibonacciGen (num) {
  if (num === 1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacciGen(num - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};
console.log(fibonacciGen(45));

// function fibonacciFinder (fibonacciNum) {
    
// }