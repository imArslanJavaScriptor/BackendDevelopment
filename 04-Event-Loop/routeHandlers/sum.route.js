const sumReqHandler = (req, res) => {
  console.log("1. In sumReqHandler", req.url);
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
      console.log("2. Received chunk:", body);
    });

    req.on("end", () => {
      console.log("3. Finished receiving data:", body);
      const params = new URLSearchParams(body);
      const num1 = Number(params.get("num1"));
      const num2 = Number(params.get("num2"));
      const result = num1 + num2;
      res.write(`<h1>Result: ${result}</h1>`);
      return res.end();
    });
    console.log("4. Exiting sumReqHandler");
}


module.exports = sumReqHandler