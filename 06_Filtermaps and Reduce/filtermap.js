const myNums = [1,2,3,4,5,6,7,8,9];

//filter method
// const myValues = myNums.filter(((num)=> {
//   return num >5; 
//  })
// )
// console.log(myValues); // [ 6, 7, 8, 9 ]

// const myValues = myNums.filter(((num)=> num >5))
// console.log(myValues); // [ 6, 7, 8, 9 ]

//or 
// myNums.forEach((num) => {
//   if(num >2){
//     console.log(num);
//   }
// })

// const numArray =[];

// myNums.forEach((num) => {
//   if(num >2){
//     numArray.push(num);
//   }
//   })
//   console.log(numArray);


const books = [ 
  { title: 'harry potter', author: 'J.K. Rowling', rating: 4.5, genre: 'fantasy', year: 1997 },
  { title: 'the hobbit', author: 'J.R.R. Tolkien', rating: 4.7, genre: 'fantasy', year: 1937 },
  { title: '1984', author: 'George Orwell', rating: 4.2, genre: 'dystopian', year: 1949 },
  { title: 'to kill a mockingbird', author: 'Harper Lee', rating: 4.3, genre: 'classic', year: 1960 },
  { title: 'the great gatsby', author: 'F. Scott Fitzgerald', rating: 3.9, genre: 'classic', year: 1925 },
  { title: 'the catcher in the rye', author: 'J.D. Salinger', rating: 3.8, genre: 'classic', year: 1951 },
  { title: 'the da vinci code', author: 'Dan Brown', rating: 3.6, genre: 'thriller', year: 2003 },
  { title: 'the alchemist', author: 'Paulo Coelho', rating: 3.5, genre: 'fiction', year: 1988 },
  { title: 'the hunger games', author: 'Suzanne Collins', rating: 4.4, genre: 'dystopian', year: 2008 },
  { title: 'the fault in our stars', author: 'John Green', rating: 4.1, genre: 'romance', year: 2012 },
  { title: 'october junction', author: 'Ann Patchett', rating: 3.9, genre: 'fiction', year: 2003 },
  { title: 'gunaho ke devta', author: 'dharmveer bharti', rating: 4.6, genre: 'fiction', year: 1949 },
  {title: 'godan', author: 'munshi premchand', rating: 4.8, genre: 'fiction', year: 1936 },
  { title: 'the guide', author: 'R.K. Narayan', rating: 4.0, genre: 'fiction', year: 1958 },
  {title: 'the white tiger', author: 'Aravind Adiga', rating: 4.3, genre: 'fiction', year: 2008 }
];

// filter books with rating greater than 4

let userBooks = books.filter( (bk)=> bk.genre === 'romance' );
 userBooks =books.filter( (bk) => bk.year >= 2000 && bk.genre === "dystopian" );

console.log(userBooks);


//
const myNumber = [1,2,3,4,5];

const number = myNumber.map( (num) => num * 2 );

console.log(number);


const newNums =myNumber
                .map((num)=> num *20)
                .map( (num)=> num /5 )
                .filter( (num)=> num >10 );

console.log(newNums);

