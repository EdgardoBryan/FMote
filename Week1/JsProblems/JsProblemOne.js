// getInitials
// Create a string to get initials from a first and last name.

var getInitials = function(name) {
    
    // your code here
  return name.split(" ")[0].slice(0,1).toUpperCase() + "." + name.split(" ")[1].slice(0,1).toUpperCase()
    
}

//add numbers in the array if - do not add 
var sumOfPositive = function(nums) {
    var sum = 0;
    for (var num of nums) {
        if (num > 0) {
            sum += num;
        }
    }
    return sum;
}


var sumOfPositive = function(nums) {
    let total = 0
    for(let i = 0;i < nums.length;i++)
      if(nums[i]>0){
        total +=nums[i]
      }
  return total
}

var multiplyNumbers = function(num1, num2) {
    let multiply = 0
    for(let i=0; i < num1; i++) {
      multiply += num2
    }
        return multiply
  }