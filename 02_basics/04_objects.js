// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id="12343"
tinderUser.name = "Ranjan"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
    email:"Ranjan@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Ranjan",
            lastname:"Yadav"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}

// const obj4 = {obj1,obj2}
// const obj4 = Object.assign({},obj1,obj2,obj3)

const obj4 = {...obj1, ...obj2}
// console.log(obj4)

const users = [
    {
        id:1,
        email:"r@gmail.com"
    },
    {
        id:1,
        email:"r@gmail.com"
    },
    {
        id:1,
        email:"r@gmail.com"
    }
]

users[1].email
//console.log(tinderUser)

//console.log(Object.keys(tinderUser))
//console.log(Object.values(tinderUser))
//console.log(Object.entries(tinderUser))

//console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Ranjan"
}

// course.courseInstructor

const { courseInstructor: instructor } = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Ranjan",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]