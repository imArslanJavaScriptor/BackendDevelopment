const http = require("http")
const {syntaxTesting} = require("./syntaxTesting")
const { runtimeTesting } = require("./runtime")
const { logicalTesting } = require("./logical")

const PORT = 3000
const server = http.createServer((req, res) => {
  console.log(req)
  // syntaxTesting();
  // runtimeTesting();
  logicalTesting()
})

server.listen(PORT, () => {
console.log(`Server is Listening on PORT: http://www.localhost:${PORT}`)
})