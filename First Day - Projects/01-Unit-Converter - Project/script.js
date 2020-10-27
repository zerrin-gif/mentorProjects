let kelvin = prompt('weather temperature today in kelvin?') * 1;
//kelvin is 293
//let kelvin = 293;
//celsius is 273 less than kelvin
let celsius = kelvin - 273; 
//calculate weather by fahrenheit
//let fahrenheit = fahrenheit.round;
//fahrenheit has been calculated
let fahrenheit = Math.round(celsius * (9/5) + 32);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
console.log(`The temperature is ${celsius} degrees Celsius`);
//calculate celsius to newton
let newton = Math.floor(celsius * (33/100));
console.log(`The temperature is ${newton} degrees Newton`);