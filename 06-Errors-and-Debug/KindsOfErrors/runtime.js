const runtimeErrorTesting = () => {
  // Refrece Error x is not defined
  // console.log(x);

  // Type Error num is not a function
  // let num = 10
  // num();

  // Invalid JSON parse (Syntax Error)
  // let jsonString = "{ name: 'John' }"; // Invalid JSON (keys must be in double quotes)
  // JSON.parse(jsonString);

  // File not found error (fs module)
  const fs = require("fs");
  // fs.readFileSync("nonexistentfile.txt");  // Throws Error: ENOENT (file not found)

}

module.exports = runtimeErrorTesting;