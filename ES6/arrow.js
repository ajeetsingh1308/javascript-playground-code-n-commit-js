"use strict";

const user = {
  username : "Amit Singh",
  email: "amitsingh@gmail.com",
  password: "12345",
  isLoggedIn : false,
  lastLoginDays : ["Monday", "Friday"],

  welcomeMessage: function() {
    console.log(`${this.username},  welcome to website`);
    console.log(this);  // this refers to the current object (user object)

  }

}


// user.welcomeMessage();
// user.username = "Aman Kunwar";
// console.log(user.username);
// user.welcomeMessage();
// console.log(this);

// function chai(){
//   console.log(this); // in function this refers to global object (window in browsers, global in nodejs), undefined in strict mode
// }

// chai()

// const chai = function(){
//   let username = "Ajeet Singh";
//   console.log(this.username); // in function this refers to global object (window in browsers, global in nodejs), undefined in strict mode
// }

// chai()

// Arrow function
const chai = () => {
  let username = "Ajeet Singh";
  console.log(this); // in arrow function this refers to the surrounding scope, here surrounding scope is global, so it will be undefined in strict mode

}

chai ();

// method 01: implicit return. "implicit means something happens automatically, without you having to write it out directly." 
//Here, return is implicit → you didn’t write return, but JS still returns a + b.
const addTwoNumbers = (number1, number2) => number1 + number2;
console.log(addTwoNumbers(3,5));


// method 02: explicit return 👉 Explicit means you clearly state it yourself.
// Here, you explicitly wrote return, so it’s obvious and clear.
const addTwoNumbers2 = (number1, number2) => {
  return number1 + number2;
}
console.log(addTwoNumbers2(3,5));


// method 03: single parameter
const square = number => number * number;
console.log(square(5));

// method 04: no parameter
const greet = () => "Hello World";
console.log(greet());

// method 05: multiple lines of code
const multiplyTwoNumbers = (number1, number2) => {
  const result = number1 * number2;
  return result;
}
console.log(multiplyTwoNumbers(3,5));

// method 06: arrow function in object
const newuser = {
  username : "Amit Singh",
  email: "amit@gmail.com",
  password: "12345",
  isLoggedIn : false,
  lastLoginDays : ["Monday", "Friday"],

  welcomeMessage: () => {
    console.log(`${this.username},  welcome to website`);
    console.log(this);  // this refers to the surrounding scope, here surrounding scope is global, so it will be undefined in strict mode

  }

}

newuser.welcomeMessage();

