// array
["Captain America","Hulk","Thor"]

// object in array
[
  {name: "Captain America", age: 35},
  {name: "Hulk", age: 40},
  {name: "Thor", age: 1000}
]

const myArray =["Armenia","Bulguria","chezhia","dublin","Estonia","Franfurt","Ghana","India"];

// For-of loop on array
for (const place of myArray) {
  // console.log(`I love ${place}`);
}

// for-of loop on string
let myString = "Hello World";

for (const char of myString) {
  if (char == " ") {
    continue; // skip the space character
  }
  // console.log(char);
}

// for-of loop on object
let object = {
  name: "Ajeet", 
  age: 25,
  city: "New Delhi"
};
// This will give error as object is not iterable
// for ( const item of object){
//   console.log(item);
// }
// To iterate over object we can use Object.keys(), Object.values() or Object.entries()




// MAPs
const map = new Map();

map.set("IN", "India");
map.set("USA", "United States of America");
map.set("USSR", "Union of Soviet");
map.set("UK", "United Kingdom");
map.set("UAE", "United Arab Emirates");
map.set("CH", "Switzerland");
map.set("IN", "India");

// console.log(map);
// Expected output: Map(6) {"IN" => "India", "USA" => "United States of America", "USSR" => "Union of Soviet", "UK" => "United Kingdom", "UAE" => "United Arab Emirates", "CH" => "Switzerland"}
// console.log(map.size); // 6

for (const [key, value] of map) { // destructuring the key and value from map
  // console.log(`${key} : ${value}`);
}



// Sets
const set = new Set();

set.add("India");
set.add("USA");
set.add("UK");
set.add("UAE");
set.add("Switzerland");
set.add("India"); // duplicate value will be ignored

// console.log(set);
// console.log(set.size); // 5

// for (const country of set) {
//   console.log(country);
// }

// forEach loop on map and set

// map.forEach((value, key) => {
//   console.log(`${key} : ${value}`);
// });

// set.forEach((value) => {
//   console.log(value);
// });

// for-of loop on map and set

// for (const [key, value] of map) {
//   console.log(`${key} : ${value}`);
// }

// for (const country of set) {
//   console.log(country);
// }


// For-in loop on object
// const Shortcuts = {
//   js : "JavaScript",
//   py : "Python",
//   rb : "Ruby",
//   java : "Java",
//   cpp : "C++",
//   cs : "C#",
//   php : "PHP",
// }
// for ( const key in Shortcuts){
//   console.log(`${key} Shortcut for : ${Shortcuts[key]}`);
// }

// for-in loop on array
// let myArray1 =["js","py","rb","java","cpp","cs","php"];

// for ( const index in myArray1){
//   console.log(`I love ${myArray1[index]}`);
// }

//for-in loop on map
const map1 = new Map();

map1.set("IN", "India");
map1.set("USA", "United States of America");
map1.set("USSR", "Union of Soviet");
map1.set("UK", "United Kingdom");
map1.set("UAE", "United Arab Emirates");
map1.set("CH", "Switzerland");
map1.set("IN", "India");

for ( const key in map1){
  console.log(`${key} : ${map1[key]}`); // undefined as map is not an object
}

