// Core Modules
const path = require("path")

// External Modules
const express = require("express");

// Local Modules
const userRouter = require("./routes/userRouter");
const {hostRouter} = require("./routes/hostRouter")
const rootDir = require("./utils/pathUtil");
const listingRouter = require("./routes/listingRouter");


const app = express();

app.set("view engine", "ejs");
app.set("views", "views")

// Ordering Matters in Middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(rootDir, "public")))
app.use(userRouter);
app.use("/host", listingRouter)
app.use("/host", hostRouter)
app.use((req, res, next) => {
  res.status(404).render('404', {pageTitle: "Page Not Found"})
})
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT:http://www.localhost:${PORT}`);
});