const sumReqHandler = (req, res) => {
  console.log("1. inside handler")
  const body = [];
  let result;
  req.on("data", (chunk) => {
    body.push(chunk)
    console.log("2. Chunk Event")
  });
  req.on("end", () => {
    console.log("3. End Event")
    const fullBody = Buffer.concat(body).toString();
    const params = new URLSearchParams(fullBody);
    const bodyObj = Object.fromEntries(params);
    result = Number(bodyObj.numA) + Number(bodyObj.numB);
    console.log(result)
  });
  
  console.log("4. Sending Response")
  res.setHeader("Content-Type", "text/html");
  res.write(
    `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculate Result Page</title>
  </head>
  <body>
    <h1>Result: ${result}</h1>
  </body>
  </html>`,
  );
  return res.end();
};

exports.sumReqHandler = sumReqHandler;
