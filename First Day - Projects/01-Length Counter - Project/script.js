let myName = prompt('what is your name?');

const calculateCharacter = () =>{
let tweet = prompt('what is your tweet?');
//tweet length has been measured.
let tweetCount = tweet.length;
console.log(tweetCount);  
let tweetLeft  = 150 - tweetCount;
console.log(tweetLeft);
console.log(`${myName} have written ${tweetCount} characters, you have ${tweetLeft} charecters remaining`); 
}


// Invoke the function when button is clicked

btn.addEventListener('click', calculateCharacter);
