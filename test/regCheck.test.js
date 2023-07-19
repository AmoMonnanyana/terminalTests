import assert from "assert"
import regCheck from "../regCheck.js"

describe('The regCheck function' , function(){
    it('it should return "true" when called with arguments "DC 55 YU GP" and "GP".' , function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });
    it('it should return "false" when called with arguments "DC 55 YU GP" and "EC".' , function(){
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });

    it('it should return "true" when called with arguments "5566 L" and "L".' , function(){
        assert.equal(regCheck('5566 L', 'L'), true);
    });
    it('it should return "false" when called with arguments "5566 L" and "M".' , function(){
        assert.equal(regCheck('5566 L', 'M'), false);
    });

    it('it should return "true" when called with arguments "ERT 123 EC" and "EC".' , function(){
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
    });
    it('it should return "false" when called with arguments "ERT 123 EC" and "GP".' , function(){
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
    });

    it('it should return "true" when called with arguments "FGT 123 MP" and "MP".' , function(){
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
    });
    it('it should return "false" when called with arguments "FGT 123 MM" and "MP".' , function(){
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    });
});