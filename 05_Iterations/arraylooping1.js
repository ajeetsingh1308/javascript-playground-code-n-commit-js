const coding =["JavaScript", "Python", "C++", "Java", "Ruby"];

// function to print each element of array
coding.forEach( function(language){
  console.log(language);
})

// using named function
function printMe(language){
  console.log(language);
}
coding.forEach(printMe);

// using arrow function
coding.forEach( (language, index, arr) => {
  console.log(language, index, arr);

})

const myCoding = [
  {
    lang: "JavaScript",
    shortcut: "js"
  },
  {
    lang: "Python",
    shortcut: "py"
  },
  {
    lang: "C++",
    shortcut: "cpp"
  },
  {
    lang: "Java",
    shortcut: "java"
  },
  {
    lang: "Ruby",
    shortcut: "rb"
  },
]
  
myCoding.forEach( (name) => {
  console.log(`The shortcut of ${name.lang} is ${name.shortcut}`);

})
