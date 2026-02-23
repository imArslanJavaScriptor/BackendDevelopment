const homeReqHandler = (res) => {
  res.write(
      "<h1>Welcome to the Calculator App <a href='/calculator'>Go to Calculator</a></h1>",
    );
    return res.end();
};


module.exports = homeReqHandler