// Complete the regex unRegex so that it matches the strings 
// "run", "sun", "fun", "pun", "nun", and "bun". 
// Your regex should use the wildcard character.


let exampleStr = "Let's have fun with regular expressions in the sun!";
let unRegex = /.un/; 
let unRegex1 = /.ab/;
let result = unRegex.test(exampleStr);
let result2 = unRegex1.test(exampleStr);


console.log(result); //<---true
console.log(result2); // <---false