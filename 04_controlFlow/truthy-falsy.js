const userEmail = "hatish.ai";

// if (userEmail) {
//     console.log(`You email is ${userEmail}`)
// } else {
//     console.log("Please provide your email")
// }

// const userEmail1 = "";

// if (userEmail1) {
//     console.log(`You email is ${userEmail1}`)
// } else {
//     console.log("Please provide your email")
// }

// const userEmail2 = []

// if (userEmail2) {
//     console.log(`You email is ${userEmail2}`)
// } else {
//     console.log("Please provide your email")
// }

//truthy and falsy values in JavaScript

//falsy values
//undefined
//null
//0, -0
// BigInt
//""
//NaN
//false

const userEmail4 = "";

if (userEmail4) {
  console.log(`You email is ${userEmail4}`);
} else {
  console.log("Please provide your email");
}

const userEmail6 = 0;

if (userEmail6) {
  console.log(`You email is ${userEmail6}`);
} else {
  console.log("Please provide your email");
}

const userEmail7 = null;

if (userEmail7) {
  console.log(`You email is ${userEmail7}`);
} else {
  console.log("Please provide your email");
}

const userEmail8 = undefined;

if (userEmail8) {
  console.log(`You email is ${userEmail8}`);
} else {
  console.log("Please provide your email");
}

const userEmail9 = NaN;

if (userEmail9) {
  console.log(`You email is ${userEmail9}`);
} else {
  console.log("Please provide your email");
}

const userEmail10 = false;

if (userEmail10) {
  console.log(`You email is ${userEmail10}`);
} else {
  console.log("Please provide your email");
}

//truthy values
//"hatish.ai"
//[]
//{}
//42
//true
// function(){}

const userEmail15 = [];
if (userEmail15.length === 0) {
  console.log("Array is empty");
}

const userEmail3 = "hatish.ai";

if (userEmail3) {
  console.log(`You email is ${userEmail3}`);
} else {
  console.log("Please provide your email");
}

const userEmail5 = [];

if (userEmail5) {
  console.log(`You email is ${userEmail5}`);
} else {
  console.log("Please provide your email");
}

const userEmail11 = {};

if (Object.keys(userEmail11).length === 0) {
  console.log(`You email is empty`);
} else {
  console.log("Please provide your email");
}

const userEmail12 = 42;

if (userEmail12) {
  console.log(`You email is ${userEmail12}`);
} else {
  console.log("Please provide your email");
}

const userEmail13 = true;

if (userEmail13) {
  console.log(`You email is ${userEmail13}`);
} else {
  console.log("Please provide your email");
}

const userEmail14 = function () {};

if (userEmail14) {
  console.log(`You email is ${userEmail14}`);
} else {
  console.log("Please provide your email");
}

// Nullish Coalescing Operator (??): null or undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;

// Turnary Operator

// condition ? true : false

const age = 17;
console.log(age >= 18 ? "You can vote" : "You cannot vote");
