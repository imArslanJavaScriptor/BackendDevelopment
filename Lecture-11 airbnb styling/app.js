// Core Modules
const path = require("path")

// External Modules
const express = require("express");

// Local Modules
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter")
const rootDir = require("./utils/pathUtil")


const app = express();

// Ordering Matters in Middlewares
app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter)

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"))
})
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT:http://www.localhost:${PORT}`);
});