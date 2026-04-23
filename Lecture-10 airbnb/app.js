// External Module
const express = require("express");
const bodyParser = require("body-parser")

const app = express();

app.use((req, res, next) => {
  console.log("1st Middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("2nd Middleware", req.url, req.method);
  next();
});


app.get("/", (req, res, next) => {
  console.log("Handling / Path", req.url, req.method);
  res.send(`<p>Respone For / Path</p>`);
});

app.get("/contact-us", (req, res, next) => {
  console.log("3rd Middleware", req.path, req.method);
  res.send(`<form action="/contact-us" method="POST">
    <input type="text" id="name" name="name" placeholder="Enter your name"><br><br>
    <label for="gender">Gender:</label>
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Male</label>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label><br><br>
    <button type="submit">Submit</button>
  </form>`);
});

app.post("/contact-us", (req, res, next) => {
  console.log(req.url, req.method, "First Body:", req.body)
  next()
})

app.use(bodyParser.urlencoded())


app.post("/contact-us", (req, res, next) => {
  console.log("Body:", req.body)
  res.send(`<p>We will contact you shortly</p>`);
})



const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is Listening on PORT: http://www.localhost:${PORT}`);
});
