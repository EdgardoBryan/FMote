const number = (num) => {
    return num / 2
  }
  console.log(number(10))
  console.log(Math.floor(number(25)))
  console.log(Math.floor(number(1235)))

  const stringFunc = function(string){
    return string[0].toUpperCase()
  }
  
  console.log(stringFunc("carrot"))
  console.log(stringFunc("hello"),stringFunc("world"),stringFunc("i love javascript"))
  
  const stringFunc2 = function(string){
    return string.toUpperCase()
  }
  console.log(stringFunc2("money"))

  const loveString = "I love JavaScript"
console.log(loveString.indexOf("J"))
console.log(loveString.indexOf("z"))
console.log(loveString.slice(7))
console.log(loveString.slice(2,6))
console.log(loveString.replace(/JavaScript/g, "HTML"))
console.log(loveString.split(" "))

const bigNumbers = 1000
console.log( "$" + bigNumbers.toFixed(2).toString())
console.log(Math.max(25,28))

const arrayOne = [1,2,3,4]
console.log(arrayOne.slice(2))
arrayOne.push(5,6)
console.log(arrayOne)
arrayOne.splice(3,2)
console.log(arrayOne)

var name = "Igor Z";
console.log(name.toUpperCase().split(' '))
const alphabet = "abc".split("").reverse().join(" ")
console.log(alphabet)

const myNewNumber = 100
console.log(myNewNumber.toFixed(2).split(".")[1] + "cents")

const coachName = "Jan frey"

console.log(coachName.split("")[4].toUpperCase().concat(" is the last initial"))