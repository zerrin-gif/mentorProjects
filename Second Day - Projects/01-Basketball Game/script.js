//let score = prompt('what is the result?');
let JohnAverageScore = ((89 + 120 + 103) / 3);
let MikeAverageScore = ((116 + 94 + 123) / 3);

if(JohnAverageScore > MikeAverageScore)  {
  console.log(`John's team wins with ${JohnAverageScore} points`);
}else if (JohnAverageScore < MikeAverageScore){
  console.log(`Mike's team wins with ${MikeAverageScore} points`);
}else {
  console.log('There is a draw');
}
let MaryAverageScore = ((97 + 134 + 105) / 3);
if(JohnAverageScore > MikeAverageScore && JohnAverageScore > MaryAverageScore)  {
  console.log(`John's team wins with ${JohnAverageScore} points`);
}else if (MikeAverageScore > JohnAverageScore && MikeAverageScore > MaryAverageScore){
  console.log(`Mike's team wins with ${MikeAverageScore} points`);
}else if(MaryAverageScore > JohnAverageScore && MaryAverageScore > MikeAverageScore){ 
console.log(`Mary's team wins with ${MaryAverageScore} points`);
}else{ 
  console.log('There is a draw');
}