// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-the-rest-parameter-with-function-parameters

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// console.log(array1.reduce(reducer));


const euros = [4, 5, 6];
const sum = euros.reduce((total, amount) => total + amount);
// console.log(sum);

var numbers = [1, 2, 3];

const sum1 = (total, sum) => total + sum;
console.log(numbers.reduce(sum1));

var num = [1,2,3,4,5];
const avg = (total, sum) => (total + sum)/2;
console.log(num.reduce(avg));


console.log('hello');
