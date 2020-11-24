/**
 * Takes two numbers and returns the largest of them. If any of the arguments is not a number the function will return undefined instead.
 * @param {Number} a 
 * @param {Number} b 
 * @return {Number | undefined}
 */
export function max(a,b) {
    if(typeof a !== 'number' || typeof b !== 'numner') return;
    if(a >= b) return a;
    else return b;
}

// Testing
console.assert(max(12,4), 12);
console.assert(max(1,3), 3);
console.assert(max('a',4), undefined);
console.assert(max(undefined,4), undefined);
console.assert(max(true,4), undefined);
console.assert(max(null,4), undefined);

/**
 * Returns the largest of the three arguments.
 * @param {Number} a 
 * @param {Number} b 
 * @param {Number} c 
 */
export function maxOfThree(a,b,c) {
    return max(max(a, b), c);
}

// Testing
console.assert(maxOfThree(1,2,3), 3);

/**
 * Returns if the provided character is a vowel
 * @param {String} char 
 */
export function isVowel(char) {
    if(typeof char !== 'string' || char.length === 0 || char.length > 1) return false;

    return ("aeiouAEIOU".indexOf(char) !== -1); 
}

// Testing
console.assert(isVowel('A'), true);
console.assert(isVowel('b'), false);
console.assert(isVowel(null), false);
console.assert(isVowel('Aa'), false);
console.assert(isVowel(''), false);
console.assert(isVowel(true), false);
console.assert(isVowel(10), false);

/**
 * Receives an array of numbers and returns its sum.
 * @param {Number[]} args 
 */
export function sum(args){
    if(typeof args !== 'array') return 0;

    return args.map((n) => Number(n)).reduce((acc, current) => acc + current, 0);
}

// Testing
console.assert(sum([1,2,3,4]), 10);

/**
 * Receives an array of numbers and returns its multiplied value.
 * @param {Number[]} args 
 */
export function multiply(args){
    if(typeof args !== 'array') return 0;

    return args.map((n) => Number(n)).reduce((acc, current) => acc * current, 1);
}

// Testing
console.assert(multiply([1,2,3,4]), 24);

/**
 * Reverses a given string.
 * @param {String} str 
 */
export function reverse(str){
    if(typeof str !== 'string') return;

    return str.split('').reverse().join('');
}

// Testing
console.assert(reverse("jag testar"), "ratset gaj");

/**
 * Returns the length of the largest word in an array of words.
 * @param {String[]} words 
 */
export function findLongestWord(words=[]){
    if(typeof words !== 'array') return 0;

    return words.map(word => word.length).reduce((acc, current) => max(acc, current), 0);
}

/**
 * 
 * @param {String[]} words 
 * @param {Number} i 
 */
export function filterLongWords(words = [], i = 0){
    if(typeof words !== 'array' || typeof i !== 'number') return [];

    return words.filter(word => word.length >= i);
}

// Fiddle
const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem * 10;
})
console.log(b);
const c = a.filter(function(elem, i, array){
  return elem === 3;});
console.log(c);
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
},1);
console.log(d);