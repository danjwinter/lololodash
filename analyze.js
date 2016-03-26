var _ = require("lodash");

var worker = function(freelancers) {
  var total = _.reduce(freelancers, function(acc, object, index){
    return acc + object.income
  }, 0)

  var average = total / _.size(freelancers);
  var under = [];
  var over = [];

  _.forEach(freelancers, function(freelancer){
    if (freelancer.income > average) {
      over.push(freelancer)
    } else {
      under.push(freelancer)
    }
  })
  under = _.sortBy(under, 'income')
  over = _.sortBy(over, 'income')
  return {
    average: average,
    underperform: under,
    overperform: over
  }
};

module.exports = worker;
