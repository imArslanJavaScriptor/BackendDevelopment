const http = require("http");

const PORT = 3000;
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
      <head>
      <title>Ecommerce Application</title>
      </head>
      <body>
      <nav style="display: flex; align-items: center; flex-basis: 20px; padding: 10px 20px; background-color: black; color: white;">
        <a href="/home">Home</a>
        <a href="/men">Men</a>
        <a href="/women">Women</a>
        <a href="/kids">Kids</a>
        <a href="/cart">Cart</a>
      </nav>
      </body>
    </html>
      `);

  if (req.url === "/home") {
    res.write(`<h1>Welcome To Home</h1>`);
    return res.end();
  } else if (req.url.toLowerCase() === "/men") {
    res.write(` <h1>Welcome To Men's Products Page</h1>`);
    return res.end();
  } else if (req.url === "/women") {
    res.write(`<h1>Welcome To Women's Products Page</h1>`);
    return res.end();
  } else if (req.url === "/kids") {
    res.write(`<h1>Welcome To Kid's Products Page</h1>`);
    return res.end();
  } else if (req.url === "/cart") {
    res.write(`<h1>Welcome To Cart Page</h1>`);
    return res.end();
  } else {
    res.write(`<h1>This is Default Page</h1>`);
    return res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server is Listening on PORT: ${PORT}`);
});



// Stream: Continous Flow of a Particular Thing in a Particular direction.