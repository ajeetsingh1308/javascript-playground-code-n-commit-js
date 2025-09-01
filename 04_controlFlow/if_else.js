//Logic Control Flow in JavaScript

//1. If...Else Statement
//  if(true){
//     console.log("This is true");
//  }

// == used for value check
// === used for value and type check
 const user = "Amit";
 if( user == "Amit"){
    console.log("Hello Amit");
 }

const balance =1000;

if (balance > 5000) {
  console.log("test")
}
  
console.log("test2");

const userLoggedIn = true;
const DebitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;


// Logical AND (&&) operator
if (userLoggedIn && DebitCard)  {
    console.log("Allow user to make a purchase");
}

// Logical OR (||) operator
if (loggedInFromGoogle || loggedInFromEmail){
  console.log("user looged in from google or email");
}

// if else statement
const userEmail = "";

if (userEmail) {
  console.log(`You email is ${userEmail}`);
} else {
  console.log("Please provide your email");
}

// if else if else statement
const userEmail1 = "  ";

if (userEmail1) {
  console.log(`You email is ${userEmail1}`);
} else if (userEmail1.length > 0) {
  console.log("Email is empty");
} else {
  console.log("Please provide your email");
}

// Nested if else statement
const userEmail2 = "  ";
const userLoggedIn2 = true;

if (userLoggedIn2) {
  if (userEmail2) {
    console.log(`You email is ${userEmail2}`);
  } else if (userEmail2.length > 0) {
    console.log("Email is empty");
  } else {
    console.log("Please provide your email");
  }
} else {
  console.log("User not logged in");
}

