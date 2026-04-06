const http = require("http")
const {requestHandler} = require("./handler")

const PORT = 3000
const app = http.createServer(requestHandler)
app.listen(PORT, () => {
  console.log(`Server is listening on PORT: http://localhost:${PORT}`)
})