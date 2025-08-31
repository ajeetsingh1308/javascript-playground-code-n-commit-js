const user = {
  username: "Amit Singh",
  price:  999,

  welcomeMessage: function(){
    console.log(`${this.username}, welcome to our website`);
  }

}

user.welcomeMessage()
console.log(this)

// function chai(){
//   let username ="Amit Singh"
//   console.log(this.username);

// }
// chai()

// const chai = function(){
//   let username = "Amit"
//   console.log(this.username);
// }
// chai()

const chai = () => {
  let username ="Anuj Sharma"
  console.log(this);
}

chai()