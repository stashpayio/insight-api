'use strict';

var Common = require('./common');
var SupplyHelper = require('../helpers/SupplyHelper');

function StatisticsController(node) {
  this.node = node;
  this.common = new Common({log: this.node.log});
}

StatisticsController.prototype.getSupply = function(req, res) {

  var blockHeight = this.node.services.stashd.height;  

  res.jsonp({
    totalSupply: SupplyHelper.getTotalSupply(),
    circulatingSupply: SupplyHelper.getCirculatingSupplyByHeight(blockHeight),
  });
};

StatisticsController.prototype.getTotalSupply = function(req, res) {
  res.status(200).send(SupplyHelper.getTotalSupply().toFixed(8)).toString();
};

StatisticsController.prototype.getCirculatingSupply = function(req, res) {
  var nBlockHeight = this.node.services.stashd.height;   
  res.status(200).send(SupplyHelper.getCirculatingSupplyByHeight(nBlockHeight).toFixed(8).toString());
};

module.exports = StatisticsController;
