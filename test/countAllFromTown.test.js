import assert from 'assert'
import countAllFromTown from '../countAllFromTown.js'

describe('The countAllFromTown function' , function(){
    it('it should return a count of 3 when called with fromStellies.' , function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
//fromStellies should contains
assert.equal(fromStellies, 3)
});

it('it should return a count of 1 when called with fromKuilsriver.' , function(){
var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
//fromStellies should contains
assert.equal(fromKuilsriver, 1)
    });
})