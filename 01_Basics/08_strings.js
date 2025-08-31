let firstname = "Amit";
let lastname = "Singh";
const age =16;
let classname = "12th";

// console.log(firstname + lastname + "thankyouu") //=> not a good practice

// we use string interpolation. using backticks
console.log(`Helllo, My name is ${firstname} ${lastname}, I am ${age} year old and i study in class ${classname}`);

// string declaration 
const gameName = new String('Amit')
console.log(gameName[0])
console.log(gameName.anchor(firstName))
console.log(gameName.blink())
console.log(gameName.bold())
console.log(gameName.charAt(3))
console.log(gameName.length)
console.log(gameName.toLowerCase())
console.log(gameName.toUpperCase())
console.log(gameName.charCodeAt())
console.log(gameName.codePointAt())
console.log(gameName.indexOf('m'))

//sub string
const newString = gameName.substring(0,2);
console.log(newString);

//
const anotherString = gameName.slice(-3,0)
console.log(anotherString)

//replce
const url = "amit"
console.log(url.replace('amit', 'ajeetsingh'))

// check 
console.log(url.includes('ami'))

// strings into array
const string = "jug jug jiya su lalanwa manwa mein bhag jagal ho";
console.log(string.split(' '));
