// singleton

//objects literals 

//symbol
const mySys = Symbol("key1");





//Object.create
const JsUser = {
  [mySys]: "myKey",
  name: "Ajeet",
  "lastname": "Singh",
  age: 22,
  location : "Bihar, India",
  email: "ajeetprakashsingh1308@gmai.com",

}



console.log(JsUser.email);
console.log(JsUser.lastname);
console.log(JsUser["name"])
console.log(JsUser["lastname"])
console.log(JsUser["mySys"])

//printing the whole object JsUser
// console.log(JsUser)

//changing object value
// JsUser.email ="amit@gmail.com"
// console.log(JsUser)

//freeze the object JsUser
// Object.freeze(JsUser);
// JsUser.email ="nandikasingh@gmail.com"
// console.log(JsUser)

// //add function
JsUser.greeting =function(){
  console.log("Hello Js User")
}

JsUser.greetingTwo = function(){
  console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());






