const myNums = [1,2,3,4,5,6,7,8,9];


// function
// const myTotal = myNums.reduce( function (acc, currval) {
//   console.log(`accumulator: ${acc} , current value: ${currval}`);
//   return acc + currval;
// }, 3)

// console.log(myTotal); // 48

// arrow function
const myTotal = myNums.reduce( (acc, currval) => (acc + currval) , 0);
console.log(myTotal); // 45

const course = [
  {name: "JavaScript", price: 299},
  {name: "ReactJS", price: 199},
  {name: "Angular", price: 299},
  {name: "NodeJS", price: 399},
  {name: "Python", price: 499}, 
  {name: "Django", price: 599},
  {name: "Flask", price: 699}
];

const TotalPrice = course.reduce( (accumulator, course) => (accumulator + course.price), 0);

console.log(TotalPrice); // 3093