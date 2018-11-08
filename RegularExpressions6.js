//Using the regex starRegex, find and extract both "Twinkle" words from the string twinkleStar.


let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line


console.log(result);
console.log(result[0]);
console.log(result[1]);