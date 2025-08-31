const marvel_heros = ["ironman", "hulk", "thor", "captainamerica","hawkeye", "Dr strange"];

const dc_heros =["superman", "batan", "flash","joker"];

// marvel_heros.push(dc_heros) ;
//trying to merge both array into one array, but it doesnot merges well
//push also modifies the existing array

// console.log(marvel_heros)
// console.log(marvel_heros[6][1]);

// const all_heros = marvel_heros.concat(dc_heros); // does not modifies the existing array, stores in new array
// console.log(all_heros);
// console.log(marvel_heros);
// console.log(dc_heros);

// spread
// const all_new_heros =[...marvel_heros, ...dc_heros]
// console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 4, 5, 6, [7,[1,2,3,4,5,6], 8], 7, 8, 9, 10 ]

// const real_another_array = another_array.flat(Infinity)
// console.log(another_array)
// console.log(real_another_array)

//data scraping

console.log(Array.isArray("Ajeet"));
console.log(Array.from("Ajeet"));

console.log(Array.from({name: "Ajeet"})) // intresting, gives an empty array,

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1, score2, score3));


