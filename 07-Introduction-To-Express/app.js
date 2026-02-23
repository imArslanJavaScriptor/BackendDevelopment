const express = require("express");

const app = express();
const PORT = 3000;
// Middleares ma order metter krta ha jonsa middlwsrare pehle ayega wo pehle call hoga
// app.use((req, res, next) => {
//   console.log("Request Came in First Middleware" ,req.url, req.method);
//   res.send("<h1>Hello From Express</h1>")
// })


app.use((req, res, next) => {
  console.log("Request Came in First Middleware", req.url, req.method);
  res.send("<h1>Hello From Express</h1>")
   next();
})

app.use("/about" , (req, res, next) => {
  res.send("<h1>Welcome to About Page</h1>")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
