
var RedisStore = require("connect-redis");



exports.fibonacci = function(x){
    if(x == 0){
        return 0;
    }
    if(x==1){
        return 1;
    }
    else{
        return this.fibonacci(x-1)+this.fibonacci(x-2);
    }
}