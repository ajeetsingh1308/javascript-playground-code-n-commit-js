const accountId = 2345
let accountEmail = "ajeetsingh@gmail.com"
var accountPassword =" @aj47#47"
accountCity = "Panajim" // poor way of storing data without determining the data type
let accountState;

//accountId = 2 // not allowed, can not change the const value 
console.log(accountId);


accountEmail = "amit@hmail.com"
accountCity="Jamui"
accountPassword = "Amit@ak47#okokok" 
accountState= "Bihar" // poor way of storing data without determining the data type
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/* 
VAR ❌
LET ✅
In the intial days there were the problem of var(because of issue in block and functional scope "{......}"), there we use const for constant & Let for variable/string
*/

// use of backtick `....` for string interpolation
console.log(`Account id is : ${accountId}`);
console.log(`Account email is : ${accountEmail}`);
console.log(`Account password is : ${accountPassword}`);
console.log(`Account city is : ${accountCity}`);

