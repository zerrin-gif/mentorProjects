function getStudyHours(day){
  if (day === 'monday' || day === 'tuesday' || day === 'wednesday'){
    return 5;
  }else if(day === 'thursday' || day === 'friday' || day === 'saturday'){
    return 8;
  }else {
    return 10;
  }
}
console.log(getStudyHours('tuesday'));

function getActualStudyHours(){
 return 5 * 3 + 8 * 3 + 10;
}
console.log(`This week's total study hours ${getActualStudyHours()}`);
let idealHours = 6;
function getIdealStudyHours(){
return idealHours * 7; 
}
console.log(getIdealStudyHours());
// console.log(`Your ideal study hours: ${getIdealStudyHours()}`);
function calculateStudyDebt(){ 
if (actualStudyHours === idealStudyHours){
  return 'you have the perfect amount of study.';
}else if(actualStudyHours > idealStudyHours){
 return 'you got more study than you planned.';
}else if(actualStudyHours < idealStudyHours){
  return 'you should create some empty time to study.'
}
}
// console.log(calculateStudyDebt());
let actualStudyHours = getActualStudyHours();
let idealStudyHours = getIdealStudyHours();
console.log('You got ' + (idealStudyHours - actualStudyHours) + ' hour(s) less study than you needed this week. Create some empty time to study.');
console.log(getActualStudyHours(getStudyHours(getActualStudyHours())));
console.log(calculateStudyDebt(getIdealStudyHours(8))); 