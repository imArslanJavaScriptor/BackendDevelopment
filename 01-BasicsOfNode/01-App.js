const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req)
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.write(`
    <html>
    <head><title>Complete Coding</title></head>
    <body>
    <h1>Welcome To Home</h1>
    </body>
    </html>`);
    return res.end();
  } else if (req.url === "/products") {
    res.write(`
    <html>
    <head><title>Complete Coding</title></head>
    <body>
    <h1>Your'e on Products Page</h1>
    </body>
    </html>`);
    return res.end();
  }
  res.write(`
    <html>
    <head><title>Complete Coding</title></head>
    <body>
    <h1>Like / Share / Subscribe</h1>
    </body>
    </html>`);
  res.end();
  // process.exit();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is Listening on PORT: ${PORT}`);
});
