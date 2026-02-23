const logicalErrorsTesting  = ()  => {
console.log("Logical Errors Testing");
let x = 5
if (x = 10) {
  console.log(x)
} else { // Assignment instead of comparison
  console.log("x is not 10") // Will Print this 
}

let arr = [1,2,3,4,5]
for (let i=0; i <= arr.length; i++) {
  console.log(arr[i]) // Prints undefined at the end because of this i <= arr.length;
}

let num = "10"
console.log(num + 50) // Will Print 1050 instead of 60 Becuase of Convertion
}

module.exports = logicalErrorsTesting;