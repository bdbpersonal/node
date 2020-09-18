const express = require('express');
const app = express();
const calculator = require("./app/calculator");
// const routeIndex = require('./routes/index')(app);


app.listen(3001, () => {
  console.log("iniciando...");
});

app.get('/',(req,res) => {
  res.send('hello world '+ calculator.fibonacci(10));
})

// module.exports = routeIndex;