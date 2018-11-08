// let bigStr = "big";
// let bagStr = "bag";
// let bugStr = "bug";
// let bogStr = "bog";
// let bgRegex = /b[aiu]g/;
// bigStr.match(bgRegex); // Returns ["big"]
// bagStr.match(bgRegex); // Returns ["bag"]
// bugStr.match(bgRegex); // Returns ["bug"]
// bogStr.match(bgRegex); // Returns null

/*Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.

Note
Be sure to match both upper- and lowercase vowels. */



let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; 
let result = quoteSample.match(vowelRegex);


console.log(result) //<--an array of all the vowels discovered in the string.