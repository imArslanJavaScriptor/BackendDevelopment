const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req)
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.write(`
    <html>
      <head>
      <title>Complete Coding</title>
      </head>
      <body>
      <h1>Welcome To Home</h1>
      <form action="/s-bmit-details" method="POST">
      <input type="text" id="name" name="name" placeholder="Enter Your Name">
      <br><br>
      <label for="gender">Gender:</label>
      <input type="radio" id="male" name="gender" value="male">
      <label for="male">Male</label>
      <input type="radio" id="female" name="gender" value="female">
      <label for="female">Female</label>
      <button type="submit">Submit</button>
      </form>
      </body>
    </html>
      `);
    return res.end();
  }
  // process.exit();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is Listening on PORT: ${PORT}`);
});
