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
  <nav>
    <a href="/">Home</a>
    <a href="/men">Men</a>
    <a href="/women">Women</a>
    <a href="/kids">Kids</a>
    <a href="/cart">Cart</a>
  </nav>
    <h1>${pageTitle}</h1>
  </body>
  </html>`
  )
  return res.end()
}


const server = http.createServer((req, res) => {
  if(req.url === "/") {
    responseBasedOnRoute(res, "Welcome To Home Page")
  } else if(req.url === "/men") {
    responseBasedOnRoute(res, "Welcome To Men Page")
  } else if(req.url === "/women") {
    responseBasedOnRoute(res, "Welcome To Women Page")
  } else if(req.url === "/kids") {
    responseBasedOnRoute(res, "Welcome To Kids Page")
  } else if(req.url === "/cart") {
    responseBasedOnRoute(res, "Welcome To Cart Page")
  }
})


server.listen(PORT, () => {
    console.log(`Server is Listening on PORT: http://www.localhost:${PORT}`)
})