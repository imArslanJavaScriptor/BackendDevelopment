const http = require("http");
const testingSyntax = require("./KindsOfErrors/syntax");
const runtimeErrorTesting = require("./KindsOfErrors/runtime");
const logicalErrorsTesting = require("./KindsOfErrors/logical");

const server = http.createServer((req, res) => {
  const { method, url } = req;
  console.log(`Received ${method} request for ${url}`);
  testingSyntax()
  // runtimeErrorTesting();
  logicalErrorsTesting();
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Welcome to the Error and Debugging Example</h1>");
  return res.end();
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
