import assert from "assert"
import yearsAgo from "../yearsAgo.js"

describe('The yearsAgo function' , function(){
    it('it should return "47" when called with "1976".' , function(){
        assert.equal(47, yearsAgo(1976))  
    });
    it('it should return "23" when called with "2000".' , function(){
        assert.equal(23, yearsAgo(2000)); 
    });



});