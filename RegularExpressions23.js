// Regular Expressions: Match Whitespace

// The challenges so far have covered matching letters of the alphabet and numbers. 
// You can also match the whitespace or spaces between letters.

// You can search for whitespace using \s, which is a lowercase s. 
// This pattern not only matches whitespace, but also carriage return, 
// tab, form feed, and new line characters. 
// You can think of it as similar to the character class [ \r\t\f\n\v].

// let whiteSpace = "Whitespace. Whitespace everywhere!"
// let spaceRegex = /\s/g;
// whiteSpace.match(spaceRegex);
// // Returns [" ", " "]


//CHALLENGE:

// Change the regex countWhiteSpace to look for multiple whitespace 
// characters in a string.

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);
console.log(result);

//Your regex should find eight spaces in "Men are from Mars and women are from Venus."
sample = "Men are from Mars and women are from Venus.";
result = sample.match(countWhiteSpace);
console.log(result);

//Your regex should find three spaces in "Space: the final frontier."
sample = "Space: the final frontier.";
result = sample.match(countWhiteSpace);
console.log(result);

//Your regex should find no spaces in "MindYourPersonalSpace"
sample = "MindYourPersonalSpace";
result = sample.match(countWhiteSpace);
console.log(result);