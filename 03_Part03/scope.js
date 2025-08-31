// //var c =400;
// let a = 300;

// if(true){
//   let a = 10;
//   const b = 20;
//   console.log("Inner:", a)
//   var c = 30;
// }

// console.log(a) // will be not get printed as a is block scope
// console.log(b)  // will be not get printed as a is block scope
// console.log(c) // will be get printed as c is function scope, it overrides the value of c from global scope


//nested scope

function one(){
  const username="Ajeet Singh"

  function two(){
    const website = "Youtube"
    console.log(username);
  }
  // console.log(website); // will not get printed as website is not in the scope of function one

  two();
}
// one();

// if(true){
//   const username1 = "Ajeet Singh"
//   if(true){
//     const website1 = "Youtube"
//     console.log(username1) + website1;
//   }
//   // console.log(website1); // will not get printed as website1 is not in the scope of this if block
// }

// console.log(username1) // will not get printed as username1 is not in the scope of global

// +++++++++++++++++++interesting example+++++++++++++++
console.log(addone(5)) //6

function addone(num){
  return num + 1;
}


console.log(addTwo(5)) //7 //error: Cannot access 'addTwo' before initialization

const addTwo = function(num){
  return num + 2;
}

