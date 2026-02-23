const pageNotFoundHandler = (res) => {
  res.write(
    "<h1>Page Does Not Exist <a href='/'>Go to Home</a></h1>",
  );
  return res.end();
};

module.exports = pageNotFoundHandler;
