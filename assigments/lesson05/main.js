/**
 * Takes two numbers and returns the largest of them. If any of the arguments is not a number the function will return undefined instead.
 * @param {Number} a
 * @param {Number} b
 * @return {Number | undefined}
 */
function max(a, b) {
  if (typeof a !== "number" || typeof b !== "number") return;
  if (a >= b) return a;
  else return b;
}

// Testing
console.assert(max(12, 4) === 12, "Failed");
console.assert(max(1, 3) === 3, "Failed");
console.assert(max("a", 4) === undefined, "Failed");
console.assert(max(undefined, 4) === undefined, "Failed");
console.assert(max(true, 4) === undefined, "Failed");
console.assert(max(null, 4) === undefined, "Failed");

/**
 * Returns the largest of the three arguments.
 * @param {Number} a
 * @param {Number} b
 * @param {Number} c
 */
function maxOfThree(a, b, c) {
  return max(max(a, b), c);
}

// Testing
console.assert(maxOfThree(1, 2, 3) === 3, "Failed");

/**
 * Returns if the provided character is a vowel
 * @param {String} char
 */
function isVowel(char) {
  if (typeof char !== "string" || char.length === 0 || char.length > 1)
    return false;

  return "aeiouAEIOU".indexOf(char) !== -1;
}

// Testing
console.assert(isVowel("A") === true, "FAILED");
console.assert(isVowel("b") === false, "FAILED");
console.assert(isVowel(null) === false, "FAILED");
console.assert(isVowel("Aa") === false, "FAILED");
console.assert(isVowel("") === false, "FAILED");
console.assert(isVowel(true) === false, "FAILED");
console.assert(isVowel(10) === false, "FAILED");

/**
 * Receives an array of numbers and returns its sum.
 * @param {Number[]} args
 */
function sum(args) {
  if (!(args instanceof Array)) return 0;

  return args.reduce((acc, current) => acc + current, 0);
}

// Testing
console.assert(sum([1, 2, 3, 4]) === 10, "FAILED SUM");

/**
 * Receives an array of numbers and returns its multiplied value.
 * @param {Number[]} args
 */
function multiply(args) {
  if (!(args instanceof Array)) return 0;

  return args.reduce((acc, current) => acc * current, 1);
}

// Testing
console.assert(multiply([1, 2, 3, 4]) === 24, "FAILED MULTIPLY");

/**
 * Reverses a given string.
 * @param {String} str
 */
function reverse(str) {
  if (typeof str !== "string") return;

  return str.split("").reverse().join("");
}

// Testing
console.assert(reverse("jag testar") === "ratset gaj");

/**
 * Returns the length of the largest word in an array of words.
 * @param {String[]} words
 */
function findLongestWord(words = []) {
  if (!(words instanceof Array)) return 0;

  return words
    .map((word) => word.length)
    .reduce((acc, current) => max(acc, current), 0);
}

// Testing
console.assert(findLongestWord(['a','abc','abcde','b']) === 5, "FAILED LONGEST WORDS");

/**
 *
 * @param {String[]} words
 * @param {Number} i
 */
function filterLongWords(words = [], i = 0) {
  if (!(words instanceof Array) || typeof i !== "number") return [];

  return words.filter((word) => word.length >= i);
}

// Testing
console.assert(filterLongWords(['a','abc','abcde','b'], 3).length === 2, "FAILED FILTER WORDS"); // ['abc','abcde']

// Fiddle
const a = [1, 3, 5, 3, 3];
const b = a.map(function (elem, i, array) {
  return elem * 10;
});
console.log(b);
const c = a.filter(function (elem, i, array) {
  return elem === 3;
});
console.log(c);
const d = a.reduce(function (prevValue, elem, i, array) {
  return prevValue * elem;
}, 1);
console.log(d);
