const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(req)
  console.log(req.url, req.method);
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.write(`
    <html>
      <head>
      <title>Complete Coding</title>
      </head>
      <body>
      <h1>Welcome To Home</h1>
      <form action="/submit-details" method="POST">
      <input type="text" id="name" name="name" placeholder="Enter Your Name">
      <br><br>
      <label for="gender">Gender:</label>
      <input type="radio" id="male" name="gender" value="male">
      <label for="male">Male</label>
      <input type="radio" id="female" name="gender" value="female">
      <label for="female">Female</label>
      <br><br>
      <button type="submit">Submit</button>
      </form>
      </body>
    </html>
      `);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method === "POST"
  ) {
    const body = []
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString()
      console.log(fullBody);
      const params = new URLSearchParams(fullBody)
      // const bodyObject = {}
      // for(let [key, val] of params.entries()) {
      //   bodyObject[key] = val;
      // }

      // Easy Way
      const bodyObject = Object.fromEntries(params)
      console.log(bodyObject)

      // Write to file
      const jsonData = JSON.stringify(bodyObject)
      console.log(jsonData);
      fs.writeFileSync("user-details.json", jsonData);
    })
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.write(`
    <html>
      <head>
      <title>Complete Coding</title>
      </head>
      <body>
      <h1>Welcome To Home</h1>
      </body>
    </html>
      `);
  return res.end();
  // process.exit();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is Listening on PORT: ${PORT}`);
});
