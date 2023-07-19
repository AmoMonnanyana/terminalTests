import assert from "assert"
import isFromBellville from "../isFromBellville.js"

describe('the isFromBellville function' , function(){
    it('it should return "true" when called with "CY 123".' , function(){
        assert.equal(isFromBellville('CY 123'), true);
    });

    it('it should return "false" when called with "CJ 123".' , function(){
        assert.equal(isFromBellville('CJ 323'), false);
    });

});