const express = require('express');
const app = express();
const calculator = require("./app/calculator");
// const routeIndex = require('./routes/index')(app);


app.listen(3001, () => {
  console.log("iniciando...");
});

app.get('/',(req,res) => {
  console.log(req.query.numero);
  res.send('hello world '+ calculator.fibonacci(req.query.numero));
})

// module.exports = routeIndex;