//Write a regex fccRegex to match "freeCodeCamp", no matter its case. 
//Your regex should not match any abbreviations or variations with spaces.


let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);
console.log(result);  // <-- True


let myString2 = "Genzyme-sanofi";
let fccRegex2 = /Genzyme-Sanofi/;
let fccRegex3 = /Genzyme-Sanofi/i;
let result2 = fccRegex2.test(myString2);
let result3 = fccRegex3.test(myString2);
console.log(result2)
console.log(result3)