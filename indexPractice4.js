const myName = "Edgardo Escamilla"

for (let char of myName) {
  console.log(char)
}

const myName2 = "Bryan"

for (let i = 0; i < myName2.length; i++){
  console.log(myName2[i])
}

const familyNames = ["Brian", "Gabe", "Nelson", "Josh", "Henry"]

for(let i = 0; i < familyNames.length; i++){
  console.log(familyNames[i])
}

let i = 0

while(i++ <10){
  console.log(i)
}

let t = ""

while(t.length < 10){
  t += "a"
  console.log(t)
}

const computer = {
  ram: "8gb",
  cpu: "quadCore",
  storage: "1tb"
}

for(let keys in computer){
  console.log(`${[keys]} is ${(computer[keys])}`)
}