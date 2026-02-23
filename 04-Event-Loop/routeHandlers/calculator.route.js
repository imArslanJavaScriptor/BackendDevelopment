
const calculatorReqHandler = (res) => {
  res.write(`<h1>Calculator</h1>
      <form action="/calculate-result" method="post">
        <input type="number" name="num1" placeholder="First Number" required>
        <input type="number" name="num2" placeholder="Second Number" required>
        <br><br>
        <button type="submit">Sum</button>
      </form>`);
      return res.end();
};



module.exports = calculatorReqHandler