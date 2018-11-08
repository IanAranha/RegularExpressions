//Complete the regex petRegex to match the pets "dog", "cat", "bird", or "fish".


let petString = "James has a pet cat.";
let petRegex = /dog|cat|fish|bird/; // Change this line
let result = petRegex.test(petString);
console.log(result);

let petString1 = "James has a pet rock.";
let petRegex1 = /dog|cat|fish|bird/; // Change this line
let result1 = petRegex.test(petString1);
console.log(result1);

let petString3 = "Emma has a pet bird.";
let petRegex3 = /dog|cat|fish|bird/; // Change this line
let result3 = petRegex.test(petString3);
console.log(result3);

let petString4 = "Ronaldo has a pet tortoise.";
let petRegex4 = /dog|cat|fish|bird/; // Change this line
let result4 = petRegex.test(petString4);
console.log(result4);