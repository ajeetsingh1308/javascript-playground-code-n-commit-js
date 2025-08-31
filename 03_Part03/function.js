// Method 1: Function Declaration
// function addTwoNumbers(number1, number2){
//   console.log(number1 + number2)
// }
// console.log(addTwoNumbers(3,5))


// method 2: 
// function addTwoNumbers(number1, number2){
//   let result = (number1 + number2);
//   return result;
//   // after return in a function, nothing works, its the end of function.
// }
// console.log(addTwoNumbers(3,5))


//method 3:
// function addTwoNumbers(number1, number2){
//    return (number1 + number2);
//   // after return in a function, nothing works.
// }

// const result1 = addTwoNumbers(3,5)
// console.log("Result: ",result1);



function loginUserMessage(username){

  // if(username === undefined){
  if(!username){
    console.log("Please ender a username")
    return
  }
  return `${username} just logged in`
}

console.log(loginUserMessage("Aman"))


