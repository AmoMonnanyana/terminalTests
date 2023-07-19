import assert from "assert"
import greet from "../greet.js"

describe('The greet function' , function(){
    it('it should return "Hello, Bob" when called with Bob' , function(){
        assert.deepEqual(greet("Bob"), "Hello, Bob");
    
    });
    it('it should return "Hello, Amogelang" when called with Amogelang' , function(){
     
        assert.equal(greet("Amogelang"), "Hello, Amogelang")
    
    });
});