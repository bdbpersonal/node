const express = require('express');
const app = express();
const calculator = require("./app/calculator");
var RedisStore = require("redis");

app.listen(3001, () => {
  console.log("iniciando...");
});

app.get('/',(req,res) => {
  var redis = RedisStore.createClient(6379,"fibonacci.du3ovg.ng.0001.sae1.cache.amazonaws.com");
  redis.on("connect", ()=>{
    console.log("connect");
  });
  

  redis.exists(req.query.numero,(err, replay)=>{
    if(replay === 1){
      redis.get(req.query.numero, (err,val)=>{
        rta = val;
        res.send('hello world '+ rta);
      });
    }else{
      var r = calculator.fibonacci(req.query.numero);
      console.log(r);
      redis.get(req.query.numero, (err,val)=>{
        rta = val;
        res.send('hello world '+ rta);
      });
    }
  });
})