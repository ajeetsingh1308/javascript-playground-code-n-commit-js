//Singleton object
// const tinderUser1 = new Object();

// non-singleton object
const tinderUser ={}

tinderUser.id ="123abc"
tinderUser.name="Amit Singhaniya"
tinderUser.email= "amitsinghaniya@gmail.com"


console.log(tinderUser);

//get all the keys in arrays
// console.log(Object.keys(tinderUser))

// //get all the values in arrays
// console.log(Object.values(tinderUser))

// //get all the entries from object in array form
// console.log(Object.entries(tinderUser))

// ///////////////////////////////////////////////////////////////////////////////
// //non-singleton object
const regularUser = {
  email: "someone@gmail.com",
  fullname:{
    userfullname1: {
      firstname :"Amit",
      lastname : "singhniya"
    },
    userfullname2: {
      firstname :"nandika",
      lastname : "chaurasiya"
    }
  }
}

console.log(regularUser.fullname.userfullname1.lastname)
console.log(regularUser.fullname.userfullname2.firstname)

const ajeet ={ 1: "ajeet", 2:"enginering", 3:"information technolofy", 4: "22IT05"}
const aman ={ 5: "aman", 6:"Btech", 7:"computer science", 8: "22IT10"}
const roydon ={ 9: "roydon", 10:"enginering", 11:"information technolofy", 12: "22IT08"}

const objcombine = {ajeet,aman};
console.log(objcombine);

const objcom = Object.assign({}, ajeet,aman,roydon)
console.log(objcom)

// //spread operator for 90% usage
 const combine ={...ajeet, ...aman, ...roydon}
 console.log(combine)

//  //values from user database
 const user = [
  {
    id:1,
    name:"amit",
  },
    {
    id:1,
    name:"amit",
  },
    {
    id:1,
    name:"amit",
  },
    {
    id:1,
    name:"amit",
  },

]



