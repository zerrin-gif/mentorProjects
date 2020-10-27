function instruction(bottle) {
  console.log("Leave from house");
  console.log("go straight 100m");
  console.log("turn right");
  console.log("go to market");
  console.log(`buy ${bottle} bottles of drink`);
  console.log("pay for drink");
  console.log("leave from market");
  console.log("come back to house");
}

function  calcBottles(totalMoney,drinkPrice){ 
return (totalMoney / drinkPrice).toFixed(0);
}
// console.log(calcBottles());
function calcChange(totalMoney,drinkPrice){
  return `Change is ${totalMoney % drinkPrice}$`; 
}
console.log(`${calcChange(52,5)}`);

function getDrink(totalMoney, drinkPrice) {
  instruction(calcBottles(totalMoney, drinkPrice));
  console.log(calcChange(totalMoney, drinkPrice));
}
getDrink(20, 3);

