// Stack (Primitive)

let myRealName= "Amit Bhadhana"

let anotherName = myRealName;
anotherName= "iitwalayatohnitwala"

console.log(myRealName);
console.log(anotherName);


//heap=>Non-primitive(for => object, array, functions)
let mySelf={
  name: "Amit",
  address: "Bihar",
  bike:"yes",
  car:"yes",
  email: "amitakak47gmail.com"
}

let yourSelf = mySelf;

yourSelf.address = "Japan";

console.log(mySelf.address);
console.log(yourSelf.address);