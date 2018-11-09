// Regular Expressions: Match All Non-Numbers

// The last challenge showed how to search for digits using the shortcut \d with a lowercase d. You can also search for non-digits using a similar shortcut that uses an uppercase D instead.

// The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.


//CHALLENGE:


// Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.

let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/g; // Change this line
let result = numString.match(noNumRegex).length;
console.log(result);


//Your regex should find 6 non-digits in "Catch 22".
numString = "Catch 22";
result = numString.match(noNumRegex).length;
console.log(result);


//Your regex should find 11 non-digits in "101 Dalmatians".
numString = "101 Dalmatians";
result = numString.match(noNumRegex).length;
console.log(result);

//Your regex should find 15 non-digits in "One, Two, Three"
numString = "One, Two, Three";
result = numString.match(noNumRegex).length;
console.log(result);

//Your regex should find 12 non-digits in "21 Jump Street";
numString = "21 Jump Street";
result = numString.match(noNumRegex).length;
console.log(result);

//Your regex should find 17 non-digits in "2001: A Space Odyssey".
numString = "2001: A Space Odyssey";
result = numString.match(noNumRegex).length;
console.log(result);

// Your regex should find no non-digits in "9".
numString = "9";
result = numString.match(noNumRegex)
console.log(result);


