function convertToUSD(amount){ 
  return amount * 1.4;
}
console.log(convertToUSD(10));
function convertToBRL(amount){
  return (amount * 0.99 * 5.7).toFixed(0);
}
console.log(convertToBRL(5));
function convertMoney(curr, val){
  if (curr === 'USD') {
    return convertToUSD(val);
  } else if (curr === 'BRL'){
    return convertToBRL(val);
  } else{
    return 'Enter valid currency.';
  }
}
console.log(convertMoney('BRL', 10));
function convertTest(curr, val, expected){
  let conversion = convertMoney(curr, val);
  return `Your expected value is ${expected} and the converison is ${conversion}`;
}
console.log(convertTest('BRL', 1, 7.49));