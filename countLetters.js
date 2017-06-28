
//input a "string" into the function, function named CountLetters
function countLetters(input) {

var letterCounts = {};

for (var i = 0; i < input.length; i++) {
  var letter = input[i];
  if (letter === ' ') {
    continue;
  }
  if (letterCounts[letter] !== undefined) {
    letterCounts[letter] += 1;
  } else {
    letterCounts[letter] = 1;
  }
}
//outputs the characters and the # of characters
return letterCounts;
}
console.log(countLetters("haha"))