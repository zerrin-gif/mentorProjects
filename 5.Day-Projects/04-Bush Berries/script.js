/*
  The space travellers have safely landed and are foraging for food in the natural wildlife.

  There are bushes with many different colour berries.
  The pink berries are the ONLY safe ones to eat.
  If any other berries are present, it's best not to eat from the bush at all!

  Create a function which checks if the bush has ALL PINK berries and is safe for the astronauts to eat from the bush.

  Use the tests to confirm which message to return
*/

let bushBerryColours1 = ["pink", "pink", "pink", "neon", "pink", "transparent"]
let bushBerryColours2 = ["pink", "pink", "pink", "pink"]

function checkBerry(arr){
  return arr.find(function safeToEat(item){
    if (item === 'pink'){
        return true;
    }
        return false;
    })
    
    }
    console.log(checkBerry(bushBerryColours1)); 

    function safeBerriesAll(arr) {
        if (checkBerry(arr)) {
        console.log('it is safe to eat!')
        } else{
          console.log('it is not safe to eat!')
        }
       
      }
      safeBerriesAll(bushBerryColours2);
      console.log(checkBerry(bushBerryColours1,bushBerryColours2)); 


