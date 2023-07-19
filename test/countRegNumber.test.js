import assert from "assert"
import countRegNumber from "../countRegNumber.js"

describe('The countRegNumber function' , function(){
    it('it should return a count of 3 when called with regCount, parameter being "CA 182736,CY 523519,CJ 812328"' , function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);
    });

    it('it should return a count of 1 when called with regCount, parameter being "CA 182736".' , function(){
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);
    });

});