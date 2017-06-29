
//input a "string" into the function, function named CountLetters
function countLetters(input) {

var letterCounts = {};

for (var i = 0; i < input.length; i++) {
  var letter = input[i];
  if (letter === ' ') {
    continue;
  }
  if (letterCounts[letter] === undefined) {
    letterCounts[letter] = [i]; //made it into an array
  } else {
    letterCounts[letter].push(i); //pushing position of letter aka (i) into the already existing array
  }
}
//outputs the characters and the # of characters
console.log(letterCounts)
}
console.log(countLetters("lighthouse is lit"))