const user = {
    username:"Ranjan",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    } 
}
// user.welcomeMessage()
// user.username ="Yadav"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "Ranjan"
//     console.log(this.username)
// }
// chai()

// const chai = function (){
//     let username = "Ranjan"
//     console.log(this)

// }
// chai()

// const addTwo = (num1,num2) =>{
//     return num1+num2  // in curly brackets must be return
// }
// console.log(addTwo(3,4))


// const addTwo = (num1,num2) => num1+num2 // implicit function in one line and in this no need round brackets
// console.log(addTwo(3,4))


// const addTwo = (num1,num2) => (num1+num2) // In round bracket no need brackets
// console.log(addTwo(3,4))

const addTwo = (num1,num2) => ({username:"Ranjan"})
console.log(addTwo(3,4))

// const myArray = [2,3,4,5,6]

// myArray.forEach()