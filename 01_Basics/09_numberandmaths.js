// const score =400;
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

// const otherNumber = 23.8966

// console.log(otherNumber.toPrecision(5));

// const hundered =100000000
// console.log(hundered.toLocaleString('en-IN'));

////////// Maths library/ ///////////////////

// console.log(Math);
// console.log(Math.abs(-79));
// console.log(Math.round(56.8566965));
// console.log(Math.ceil(56.8566965));
// console.log(Math.floor(56.8566965));
// console.log(Math.sqrt(56.8566965));
// console.log(Math.min(1,2,45,34,98,));
// console.log(Math.max(1,2,45,34,98,));

console.log(Math.random());  // 0 to 0.9999999
// want random number between 0 to 10
// console.log(Math.floor(Math.random()*10)); // 0 to 9
// want random number between 1 to 10
// console.log(Math.floor(Math.random()*10)+1); // 1 to 10

// want random number between min and max
const min = 10;
const max = 20;

console.log(Math.floor(Math.random()* (max -min + 1))+ min);