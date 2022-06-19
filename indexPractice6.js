const postive = nums.every(num=>{
    if(num > 0){
      return true
    }
  })
  
  console.log(postive)
  
  const greaterThanThree = nums.some(num => {
    if(num > 3){
      return true
    }
  })
  console.log(greaterThanThree)

  const printNumbers = nums.forEach(number => {
    console.log(number)
  })
  
  const sheep = nums.forEach(number=>{
    console.log(`${number} sheep`)
  })

  const doubled = nums.map(number =>{
    return number * 2
  })
  console.log(doubled)
  
  const dollarAmount = nums.map(dollar =>{
    return "$" + dollar.toFixed(2)
  })
  console.log(dollarAmount)
  
  const bool = nums.map(number => {
    return number.toString().replace(number,true)
  })
  console.log(bool)

  const onlyNegativeNumbers = nums.filter(number =>{
    return number < 0
  })
  
  console.log(onlyNegativeNumbers)
  
  const onlyEven = nums.filter(number =>{
    if(number % 2 === 0){
      return number
    }
  })
  console.log(onlyEven)

  const add = nums.reduce((number,num) => {
    total =  number + num
    return total
  })
  
  console.log(add)
  
  const lineOfSheep = nums.reduce((str,num) => {
    return str + num + " sheep "
  }, '')
  
  console.log(lineOfSheep)

  let coach = "aaron"
const filteredCoach = coach.split("").filter(name=>{
  
  return name.replace(/a/g,'')
})
console.log(filteredCoach.join(" "))

const triple = nums.map(number=>{
  return number * 3
})
console.log(triple)

const add2 = triple.reduce((number,num) => {
  total =  number + num
  return total
})

console.log(add2)