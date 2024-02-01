const name1 ="Ranjan"
const repoCount= 50
 
console.log(name1 + repoCount + "Value")
console.log(`Hello my name is ${name1} and my repo count is ${repoCount}`)

const gameName = new String("Ranjan-kumar-yadav")

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString= gameName.substring(0,4)
console.log(newString)

const anotherString= gameName.slice(-6,2)
console.log(anotherString)

const newStringOne="  Ranjan   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://Ranjan.com/Ranjan%20Yadav"
console.log(url.replace('%20','-'))

console.log(url.includes('Yadav'))
console.log(url.includes('Kumar'))

console.log(gameName.split('-'))
console.log(gameName.split(''))
console.log(gameName.split(' '))