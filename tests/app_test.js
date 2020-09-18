const chai = require("chai");
const assert = chai.assert;
const should = chai.should();
const expect = chai.expect;
const calculator = require('../app/calculator');

describe('Testing assert function',function(){
    describe('Check addTest Function', function(){
        it('Check the returned value using : assert', function(){
            rta = calculator.fibonacci(1);
            console.log(rta);
            rta.should.be.equal(1);
        });
    })
});