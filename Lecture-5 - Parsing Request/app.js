const http = require("http")
const {reqHandler} = require("./user")

const PORT = 3000
const server = http.createServer(reqHandler)

server.listen(PORT, () => {
console.log(`Server is Listening on PORT: http://www.localhost:${PORT}`)
})