import assert from "assert"
import isWeekday from "../isWeekday.js"

describe('The isWeekday function' , function(){
    it('it should return "false" when called with "Saturday".' , function(){
        assert.equal(isWeekday('Saturday'), false);
    });

    it('it should return "false" when called with "Sunday".' , function(){
        assert.equal(isWeekday('Sunday'), false);
    });

    it('it should return "true" when called with "Monday".' , function(){
        assert.equal(isWeekday('Monday'), true);
    });

    it('it should return "true" when called with "Tuesday".' , function(){
        assert.equal(isWeekday('Tuesday'), true);
    });

    it('it should return "true" when called with "Wednesday".' , function(){
        assert.equal(isWeekday('Wednesday'), true);
    });

    it('it should return "true" when called with "Thursday".' , function(){
        assert.equal(isWeekday('Thursday'), true); 
    });

    it('it should return "true" when called with "Friday".' , function(){
        assert.equal(isWeekday('Friday'), true);
    });

});