var RedisStore = require("redis");

var red = RedisStore.createClient(6379,"fibonacci.du3ovg.ng.0001.sae1.cache.amazonaws.com");
red.on('connect',function(){
    console.log("conectado");
});




exports.fibonacci = function(x){
    
    
    if(x == 0){
        return 0;
    }
    if(x==1){
        return 1;
    }
    else{
        var e = this.fibonacci(x-1)+this.fibonacci(x-2);
        red.set(x,e);
        return e;
    }
        
    
    
}