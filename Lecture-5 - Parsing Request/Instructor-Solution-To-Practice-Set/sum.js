const sumReqHandler = (req, res) => {
  const body = [];
  req.on("data", (chunk) => body.push(chunk));

  req.on("end", () => {
    const fullBody = Buffer.concat(body).toString();
    const params = new URLSearchParams(fullBody);
    const bodyObj = Object.fromEntries(params);
    const result = Number(bodyObj.numA) + Number(bodyObj.numB);
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
  });
};

exports.sumReqHandler = sumReqHandler;
