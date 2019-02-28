// body parts array
var randomBodyParts = ["head", "butt", "ear", "lips"];

// adjectives array
var randomAdjectives = ["attracitve", "witty", "brave", "elegant"];

// random words
var randomWords = ["bug", "cup", "flower", "nerd", "geek"];

// using math.floor and math.random to choose random item form randomBodyParts and assigning it to randomBodyPart variable
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];

// using math.floor and .random to choose random items from randomAdjectives and setting it to a variable.
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];

//using math.floor and .random to choose random item from randomWords and setting it to a variable.
var randomWord = randomWords[Math.floor(Math.random() * 3)];

console.log(
  "Your" +
    " " +
    randomBodyPart +
    " is like a " +
    randomAdjective +
    " " +
    randomWord
);
