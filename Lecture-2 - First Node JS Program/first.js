const fs = require("fs")

fs.writeFile("IOFile.txt", "Output File Ma Ye Content", (err) => {
  if(err) console.log("Err Occured");
  else console.log("File Written Successfully")
})