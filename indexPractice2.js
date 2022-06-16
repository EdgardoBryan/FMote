let nums = [1,2,3]
console.log(nums[0])
console.log(nums[2])
nums[0] = 4

console.log(nums[0])

nums.push(5)
nums.push(6)
console.log(nums)

let lastNumber = nums.pop()

console.log(lastNumber)

const product={
  name: "shiny shoes",
  brand: "gucci",
  price: 100,
  color: "black",
  soldOut: false
}

console.log(`${product.name} ${product.brand} ${product.price}`)
product.sale = false
product.tags = ["Men","Luxary"]
console.log(product)