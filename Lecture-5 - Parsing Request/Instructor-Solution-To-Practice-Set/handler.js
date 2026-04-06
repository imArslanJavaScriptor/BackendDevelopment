const { sumReqHandler } = require("./sum");

const requestHandler = (req, res) => {
  console.log(`URL`, req.url);
  console.log(`Method:`, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practice Set - Calculator</title>
  </head>
  <body>
    <h1>Welcome To Calculator</h1>
    <a href="/calculator">Go To Calculator</a>
  </form>
  </body>
  </html>`,
    );
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practice Set - Calculator</title>
  </head>
  <body>
    <h1>Calculator</h1>
    <form action="/calculate-result" method="POST">
    <input type="text" name="numA" placeholder="Enter Num A">
    <input type="text" name="numB" placeholder="Enter Num B">
    <input type="submit" value="Sum">
  </form>
  </body>
  </html>`,
    );
    return res.end();
  } else if (req.url.toLowerCase() === "/calculate-result" && req.method === "POST") {
    return sumReqHandler(req, res)
  }

  res.setHeader("Content-Type", "text/html");
  res.write(
    `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practice Set - Calculator</title>
  </head>
  <body>
    <h1>404 Page Does Not Exist</h1>
    <a href="/">Go To Home</a>
  </form>
  </body>
  </html>`,
  );
  return res.end();
};

exports.requestHandler = requestHandler;
