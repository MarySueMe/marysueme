//Using reduce method on arrays and functions

const baskets = [4, 6, 7, 0, 10];

// Task:
// Calculate the total amount of baskets
//
// Expected result: 27
//

// reduce(function(accumulator, currentValue){}, initialValue);

const total = baskets.reduce(function (accumulator, currentValue) {
  console.log('accumulator...' + accumulator);
  console.log('currentValue...' + currentValue);
  console.log('......');
  return accumulator + currentValue;
}, 0);

console.log(total);

//   acc      currentValue    Return
//
//    0           4             4
//    4           6             10
//   10           7             17
//   17           0             17
//   17          10             27



// Example 2 - Strings
const words = ['the', 'quick', 'brown', 'fox'];

const sentence = words.reduce(function (accumulator, currentValue) {
  return accumulator + ' ' + currentValue;
}, '');

console.log(sentence);




// Example 3:  Objects
const people = [
  { name: 'alice', age: 30 },
  { name: 'bob', age: 18 },
  { name: 'charly', age: 49 },
  { name: 'david', age: 21 },
  { name: 'emma', age: 17 },
];

/*

  TASK:
  1. calc the total age (ie. adding together all the ages from everyone)
  2. calc the average age (total age divided by number of people)
  3. (bonus) solve using different types of functions

*/

const totalAge = people.reduce(function (accumulator, person) {
  return accumulator + person.age;
}, 0);

const averageAge = totalAge / people.length;

console.log(`total age: ${totalAge}`);
console.log(`average age: ${averageAge}`);
