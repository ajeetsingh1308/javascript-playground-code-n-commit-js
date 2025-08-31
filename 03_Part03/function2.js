//... rest operator
// case: 1
// function calculateCartPrice(...num1){

//   return num1;

// }

// console.log(calculateCartPrice(200,400,500))

//case: 2
// function calculateCartPrice(val1, val2, ...num1){
//   console.log("result: ", num1);
//   return num1;
  
// }
// calculateCartPrice(200,400,500, 2000)



// object and functions
const user = {
  username : "Amit Singh",
  price:199
}

function handleObject(anyobject){
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);


//array and function

const myNewArray = [200,300,400,500,700,1000];

function returnSecondValue(getArray){
  return getArray[1];
}

console.log(returnSecondValue(myNewArray))
