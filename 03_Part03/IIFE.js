(function(){
  console.log("I am an IIFE!");
})();
 
// type 1: Anonymous IIFE
// (function(){
//   let secret = "hidden";
//   console.log(`The secret is: ${secret}`);
// })();

// type 2: Named IIFE
// (function exp(){
//   let secret = "hidden";
//   console.log(`The secret is: ${secret}`);
// })();

// type 3: Arrow function IIFE
( (name) => {
  console.log(`I am an Arrow function IIFE!: welcome to IIFE ${name}`);
})('ajeet');




