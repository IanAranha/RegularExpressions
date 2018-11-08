//  Regular Expressions: Match Everything But Letters and Numbers

// You have learned that you can use a shortcut to match alphanumerics [A-Za-z0-9_] using \w. A natural pattern you might want to search for is the opposite of alphanumerics.

// You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].

// let shortHand = /\W/;
// let numbers = "42%";
// let sentence = "Coding!";
// numbers.match(shortHand); // Returns ["%"]
// sentence.match(shortHand); // Returns ["!"]

// Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
console.log(result);  //< counts the spaces and the period at the end...total of 6'


quoteSample = "Pack my box with five dozen liquor jugs.";
result = quoteSample.match(nonAlphabetRegex).length;
console.log(result);  // <---8 

quoteSample = "How vexingly quick daft zebras jump!";
result = quoteSample.match(nonAlphabetRegex).length;
console.log(result); // <----6

quoteSample = "123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.";
result = quoteSample.match(nonAlphabetRegex).length;
console.log(result);  //  <---12

quoteSample = "43%";
result = quoteSample.match(nonAlphabetRegex).length;
console.log(result);

quoteSample = "Coding!";
result = quoteSample.match(nonAlphabetRegex).length;
console.log(result);