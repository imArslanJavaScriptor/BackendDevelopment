const sumReqHandler = (req, res) => {
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


module.exports = sumReqHandler