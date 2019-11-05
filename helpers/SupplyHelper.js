var BigNumber = require('bignumber.js');

module.exports = {
    /**
     * This is an estimate, actual value will need to be updated when 
     * superblocks start paying out
     * @return {BigNumber}
     */
    getTotalSupply: function () {
        return new BigNumber(684000000);
    },
    /**
     * Simple calculation faster than gettxoutsetinfo.
     *  
     * Note 1: function does not cater for superblocks. When superblocks
     * start paying out this function will need to be updated.
     * 
     * Note 2: function should be updated before block 1557880
     * @param {Number} nBlockHeight
     * @return {BigNumber}
     */
    getCirculatingSupplyByHeight: function (nBlockHeight) {
        var supply = new BigNumber(19058132665047235); // genesis

        if (nBlockHeight > 1557880) {
            supply = supply.plus((nBlockHeight - 1557880) * 4871190964);
            nBlockHeight -= (nBlockHeight - 1557880);
        }

        if (nBlockHeight > 1051920) {
            supply = supply.plus((nBlockHeight - 1051920) * 5245897960);
            nBlockHeight -= (nBlockHeight - 1051920);
        }
    
        if (nBlockHeight > 525960) {
            supply = supply.plus((nBlockHeight - 525960) * 5649428573);
            nBlockHeight -= (nBlockHeight - 525960);
        }

        if (nBlockHeight > 1001) {
            supply = supply.plus((nBlockHeight - 1001) * 6084000000);
            nBlockHeight -= (nBlockHeight - 1001);
        }

        supply = supply.plus(new BigNumber(nBlockHeight).times(6760000000));

        return supply.div(1e8);
    }
};