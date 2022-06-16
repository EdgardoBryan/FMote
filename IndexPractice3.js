const days = []

if(days.length){
  console.log("true")
}else{
  console.log("false")
}

const months = ["jan","feb"]

if(months.length >=0 && months[0][0]){
  console.log("yes")
}else{
   months.push("June")
}

const numOfWeeks = 0
let areNoWeeks

if(typeof numOfWeeks === "number"){
   areNoWeeks = Boolean(numOfWeeks)
}
console.log(areNoWeeks)
console.log(Array.isArray(months))