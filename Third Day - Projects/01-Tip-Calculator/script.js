function calculateTips (bill){
  if (bill < 50 ){
    return bill * 20/100;
  } else if ( bill < 50 && bill > 200){
    return bill * 15 / 100;
  } else if (bill > 200){
    return bill * 10 / 100;
  }  
} 
console.log(calculateTips(400));