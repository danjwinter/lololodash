var _ = require("lodash");

var worker = function(orders) {

  return _.chain(orders).groupBy('article')
    .map(function(item, key) {
      key = parseInt(key);
      total = 0;

      if (item.length == 1) {
        total = item[0].quantity;
      } else {
        total = _.reduce(item, function(sum, item) {
          return sum + item.quantity;
        }, 0);
      }
      return { article: key, total_orders: total}
    })



    .sortBy(function(counted){
      return -counted['total_orders']
    })
};

module.exports = worker;
