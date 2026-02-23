const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Welcome to the NPM and Tools App</h1>');
  return res.end();
}

);

const PORT = 3001;
server.listen(PORT, () => {  
  console.log(`Server is running on port ${PORT}`);
}); 