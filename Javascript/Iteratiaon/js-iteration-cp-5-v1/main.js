function generateParenthesesPair(numberOfPairs) {
  if (numberOfPairs === 0) {
    return "";
  }
  while (numberOfPairs--) {
    return "(" + generateParenthesesPair(numberOfPairs) + ")";
  }
}

console.log(generateParenthesesPair(0)); // ''
console.log(generateParenthesesPair(1)); // '()'
console.log(generateParenthesesPair(2)); // '(())'
console.log(generateParenthesesPair(3)); // '((()))'
console.log(generateParenthesesPair(12)); // '(((((((((((())))))))))))'

module.exports = generateParenthesesPair;
