// singleton
// objecct.create
// object literals

const mySym = Symbol("key1")
    
const JsUser = {
   name:"Ranjan",
   "full name" : "Ranjan Yadav",
   [mySym] :"mykey1", //symbol
   age:22,
   email:"ranjanyadav5405@gmail.com",
   isLoggedIn:false,
   lastLoginDays:["Monday", "Saturday"]

}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "ranjan@google.com"
// Object.freeze(JsUser)
// JsUser.email="ranjan@chatgpt.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js User")
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());