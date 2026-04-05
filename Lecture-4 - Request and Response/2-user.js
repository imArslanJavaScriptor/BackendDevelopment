const http = require("http")
const fs = require("fs")

const PORT = 3000

function responseBasedOnRoute(res, pageTitle) {
  res.setHeader('Content-Type', 'text/html')
  res.write(
    `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${pageTitle}</title>
  </head>
  <body>
    <h1>${pageTitle}</h1>
  </body>
  </html>`
  )
  return res.end()
}

function formMarkup(res) {
  res.write(`
  <h1>Welcome to Home page</h1>
  <form action="/submit-details" method="POST">
    <input type="text" id="name" name="name" placeholder="Enter your name"><br><br>
    <label for="gender">Gender:</label>
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Male</label>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label><br><br>
    <button type="submit">Submit</button>
  </form>
`)
  return res.end();

}

const server = http.createServer((req, res) => {
  console.log("URL:", req.url)
  console.log("Method:", req.method)
  console.log("Headers:", req.headers)
  console.log("REQ:", req)

  // Routes
  if (req.url === "/") {
    responseBasedOnRoute(res, "Welcome To Home Page")
  } else if (req.url === "/about") {
    responseBasedOnRoute(res, "Welcome To About Page")
  } else if (req.url === "/contact") {
    formMarkup(res)
  }
  else if(req.url.toLowerCase() === "/submit-details" && req.method === "POST") {
    fs.writeFileSync('user.txt', 'HM-Arslan')
    res.statusCode = 302 // 302 refers to re-direction
    res.setHeader('Location', '/')
    return res.end()
  }
   else {
    responseBasedOnRoute(res, "Page Not Found")
  }

  // process.exit() // Exite The Loop
})

server.listen(PORT, () => {
  console.log(`Server is Listening on PORT: http://www.localhost:${PORT}`)
})