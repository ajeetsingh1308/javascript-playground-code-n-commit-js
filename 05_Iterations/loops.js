// For Loop

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// let result = []; // empty array to store values
// for (let index = 0; index < 5; index++) {
//   result.push(index); // add each i into the array
// }
// console.log(result); 


// for (let i = 5; i > 0; i--) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even`);
//   } else {
//     console.log(`${i} is odd`);
//   }
// }

// for( let i =0; i<=10; i++){
//   console.log(`outer loop: ${i}`);

//   for (let j =0; j<=10; j++){
//     console.log(`inner loop: ${j}`);
//   }
// }


// lets revise table 
// for ( let i = 1; i<= 15; i++){
//   console.log("    ")
//   console.log(`Multipilcation table of ${i}`)
  
//   for ( let j = 1; j<=15; j++){
//     console.log ( `${i} * ${j} = ${i*j}`)
//   }
// }


// Looping through an array
// let myArray =["Captain America","Iron man","Thor","Hulk","Black Widow"];

// for(let index =0; index < myArray.length; index++){
//   console.log(`I love ${myArray[index]}`);
// }

// Break and continue statement
// for ( let i = 1; i<=10; i++){
//   if ( i === 5){
//     console.log("Five is Detected");
//     break; // it will break the loop when i is 5
//   }
//   console.log(i);
// }

// Break and continue statement
// for ( let i = 1; i<=10; i++){
//   if ( i == 5){
//     console.log("Five is Detected");
//     continue; // it will break the loop when i is 5
//   }
//   console.log(`value is ${i}`);
// }

// While Loop

// let i = 1;
// while ( i <= 10 ) {
//   console.log(i);
//   break; // without break it will run infinite loop
//   i++; // if we don't increment i, it will run infinite loop
// }

// while looping through an array
let myArray =["Captain America","Iron man","Thor","Hulk","Black Widow"];
let arr = 0;
while(arr < myArray.length){
  console.log(`I love ${myArray[arr]}`);
  arr++;
}


// Do While Loop
let score = 101;
do {
  console.log(`Score is : ${score}`);
  score++;
} while (score <= 121);

// let i = 11;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10); // it will run at least once even if the condition is false