// Regular Expressions: Match Characters that Occur Zero or More Times

// The last challenge used the plus + sign to look for characters that occur one or more times. There is also an option that matches characters that occur zero or more times.

// The character to do this is the asterisk or star: *.

// let soccerWord = "gooooooooal!";
// let gPhrase = "gut feeling";
// let oPhrase = "over the moon";
// let goRegex = /go*/;
// soccerWord.match(goRegex); // Returns ["goooooooo"]
// gPhrase.match(goRegex); // Returns ["g"]
// oPhrase.match(goRegex); // Returns null

// Create a regex chewieRegex that uses the * character to match all the upper and lower"a" characters in chewieQuote. Your regex does not need flags, and it should not match any of the other quotes.


let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let result = chewieQuote.match(chewieRegex);

console.log(result); //<--- [ 'Aaaaaaaaaaaaaaaa', index: 0, input: 'Aaaaaaaaaaaaaaaarrrgh!' ]
console.log(result[0]) // <--- Aaaaaaaaaaaaaaaa


let negativeQuote = "Let him have it. It's not wise to upset a Wookiee."
let negativeQuote2 = "He made a fair move. Screaming about it can't help you."
let result2 = negativeQuote.match(chewieRegex);
let result3 = negativeQuote2.match(chewieRegex);
console.log(result2); //<--- null
console.log(result3); //<--- null