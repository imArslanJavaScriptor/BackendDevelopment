const http = require("http")

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

const server = http.createServer((req, res) => {
  console.log("URL:", req.url)
  console.log("Method:", req.method)
  console.log("Headers:", req.headers)

  // Routes
  if(req.url === "/") responseBasedOnRoute(res, "Welcome To Home Page") 
  if(req.url === "/about") responseBasedOnRoute(res, "Welcome To About Page")   
  if(req.url === "/products") responseBasedOnRoute(res, "Welcome To Products Page")   
  // process.exit() // Exite The Loop
})

server.listen(PORT, () => {
  console.log(`Server is Listening on PORT: http://www.localhost:${PORT}`)
})