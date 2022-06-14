const myFirstName = "Edgardo"
const myAge = 25

const myFullName = `${myFirstName} Escamilla`

console.log(`${myFullName} is the man`)

if(myAge>28){
  console.log("I am older than Aaron")
}else if(myAge === 28){
  console.log("I am the same age")
}else{
  console.log("I am Younger than Aaron")
}

let isEven = false

if(myAge%2 === 0){
  isEven = true
}else{
  isEven = false
}

if(myAge === true){
  console.log("My age is even")
}else{
  console.log("My age is odd")
}

console.log(isEven)

let activeUserCount = 1

if(activeUserCount === 1){
  console.log(`There is ${activeUserCount} user`) 
}else{
  console.log(`There are ${activeUserCount} users`)
}