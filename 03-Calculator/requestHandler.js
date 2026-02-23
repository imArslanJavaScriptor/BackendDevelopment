const requestHandler = (req, res) => {
    res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.write(
      "<h1>Welcome to the Calculator App <a href='/calculator'>Go to Calculator</a></h1>",
    );
    return res.end();
  } 
  else if (req.url === "/calculator") {
    res.write(`<h1>Calculator</h1>
      <form action="/calculate-result" method="post">
        <input type="number" name="num1" placeholder="First Number" required>
        <input type="number" name="num2" placeholder="Second Number" required>
        <br><br>
        <button type="submit">Sum</button>
      </form>`
  )}
  else if (req.url === "/calculate-result" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const params = new URLSearchParams(body);
      const num1 = Number(params.get("num1"));
      const num2 = Number(params.get("num2"));
      const result = num1 + num2;
      res.write(`<h1>Result: ${result}</h1>`);
      return res.end();
    });
  }
};


module.exports = requestHandler


// Start Again From 4 Hours 19 Minutes