// Current tempeature in Kelvin
const kelvin = 0;
//Relationship between kelvin and celsius
const celsius = kelvin - 273;
//Relationship between celsius and fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
//Round down fahreheit variable
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
