const http = require("http")
const fs = require("fs")
const { convertProcessSignalToExitCode } = require("util")

const PORT = 3000

function responseBasedOnRoute(res, pageTitle, calculatorLink) {
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
    ${calculatorLink?  `<a href="/calculator">Visit: ${calculatorLink}</a>` : ""}
  </body>
  </html>`
  )
  return res.end()
}

function formMarkup(res) {
  res.write(`
  <h1>Welcome to Calculator Page</h1>
  <form action="/calculate-result" method="POST">
    <input type="text" id="numa" name="numa" placeholder="Enter Num A"><br><br>
    <input type="text" id="numb" name="numb" placeholder="Enter Num B"><br><br>
    <button type="submit">Sum</button>
  </form>
`)
  return res.end();

}

const userRequestHandler = ((req, res) => {
  console.log("URL:", req.url)
  console.log("Method:", req.method)

  // Routes
  if (req.url === "/") {
    responseBasedOnRoute(res, "Welcome To Home Page", "/calculator")
  }else if(req.url === "/about") {
    responseBasedOnRoute(res, "Welcome To About Page")
  }
   else if (req.url === "/calculator") {
    formMarkup(res)
  } else if (req.url.toLowerCase() === "/calculate-result" && req.method === "POST") {
    const body = []

    req.on("data", (chunk) => {
      console.log(chunk)
      body.push(chunk)
    })

    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString()
      console.log(fullBody)
      const params = new URLSearchParams(fullBody)
      const bodyObject = Object.fromEntries(params)
      console.log(bodyObject)
      let list = []
      for(let item in bodyObject) {
        list.push(bodyObject[item])
      }
      console.log(list)
      let convertedIntoNumbers = list.map(item => Number(item))
      let sum = convertedIntoNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
      responseBasedOnRoute(res, `Result: ${sum}`)
    })
  }
   else {
    responseBasedOnRoute(res, "Page Not Found")
  }

  // process.exit() // Exite The Loop
})

const app = http.createServer(userRequestHandler)


app.listen(PORT, () => {
  console.log(`Server is listening on PORT:http://www.localhost:${PORT}`)
})