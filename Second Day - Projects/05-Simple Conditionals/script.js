// let grade = prompt('What is your grade?');
// //grade ? console.log(`80-100 ${A}`) : console.log(`70-89 ${B}`) : console.log(`60-69 ${C}`): console.log(`50-59 ${D}`) : console.log(`0-49 ${F}`);
// if(grade >= 80){
//  console.log(`you get grade 'A'`);
// }else if(grade >= 70){
//  console.log(`you get grade 'B'`);
// }else if(grade >=60){
//  console.log(`you get grade 'C'`);
// }else if(grade >=50){
//  console.log(`you get grade 'D'`);
// }else if(grade >=0){
//  console.log(`you get grade 'F'`);
// }else{

// }
// let season = prompt('What is the month?');
// switch (season){
//  case 'september':
//   console.log("autumn");
//   break;
//  case 'october':
//   console.log("autumn");
//   break;
//  case 'november':
//   console.log("autumn");
//   break;
//  case 'december' :
//    console.log("winter");
//    break;
//  case 'january' :
//    console.log("winter");
//    break;
//  case 'february' :
//    console.log("winter");
//    break;
//  case 'march' :
//    console.log("Spring");
//    break;
//  case 'april' :
//    console.log("Spring");
//    break;
//  case 'may' :
//    console.log("");
//    break;
//  case 'june' :
//     console.log("Summer");
//     break;
//  case 'july' :
//     console.log("Summer");
//     break;
//  case 'august' :
//     console.log("Summer");

// }
let month = prompt('Enter a month name and see how many days are in?');
month = month.toLowerCase();
switch(month){
  case 'january' :
  case 'march' :
  case 'may' :
  case 'july' :
  case 'august' :
  case 'october' :
  case 'december' :
    alert("There are 31 days in this month");
    break;
  case 'april' :
  case 'june' :
  case 'september' :
  case 'november' :
    alert("There are 30 days in this month");
    break;
  case 'february' :
    alert("There are 28 or 29 days in this month");
    break;
}