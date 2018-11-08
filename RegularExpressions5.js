//Apply the .match() method to extract the word coding.


let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex); 
console.log(result) // <---this will return an array.

//Match returns an array. So i a

console.log(result[0])  // <---this will return the first element of the array. Only doing this for display. 
 


let statement1 = "Italy is my favorite country; in fact, I plan to spend two weeks there next year."
let wordRegex = /spend/;
let wordRegex2 = /India/;
let result2 = statement1.match(wordRegex);
let result3 = statement1.match(wordRegex2);
console.log (result2) // <--- array
console.log(result2[0])

console.log(result3) // <---will return null. if try to extract the first element, will crash.


