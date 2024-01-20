const accountId=1234 //constant
let accountEmail="ranjanyadav5405@gmail.com"
var accountPassword="123445"
accountCity="Rajkot"
let accountState; //undefined
let num = 42; // integer
let floatNum = 3.14; // floating-point number
let str = "Hello, World!"; //String
let isTrue = true; //Boolean
let isFalse = false; //Boleans
let nullVar = null; //Null
let sym = Symbol("uniqueSymbol");  //Symbol ECMA


// accountId=2 // not allowed

/*
prefer not to use var
because of issue in block and functional scope
*/

accountEmail="efiuefi@gmail.com"
accountPassword="3243545"
accountCity="Janakpur"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
console.table([num,floatNum,str,isTrue,isFalse,nullVar,sym])

