// array

const array = ["Ajeet", "Amit", "Nandika"];
// console.log(array);

// for(i=0; i<5; i++){
//   console.log(array);
// }

// array method

array.push(9);
array.push(4);
array.push("nandika")
array.pop()

//array.unshift(9) // use to add into the array, but it gets appended at index [0]
//array.shift() // no parameter, use to remove inshit element, (9)

// console.log(array.includes(9));
// console.log(array.indexOf(4));

// const newarray =array.join(); // converts the array value in string 
// console.log(newarray);

// slice, splice

console.log("A", array)
const myn1 = array.slice(1,4);  // it doesn't change the original array
console.log(myn1)

console.log("B",array)


const myn2 = array.splice(1,4); // it changes the original array
console.log("C",array)
console.log(myn2);