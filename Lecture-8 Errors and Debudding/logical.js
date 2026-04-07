const logicalTesting = () => {
 let num = 5
 if (num = 10) { // Here instea of comparison we end up with assignment so it's loical err example.
  console.log(num)
 }  else {
  console.log("num is not 10")
 }
}

exports.logicalTesting = logicalTesting;