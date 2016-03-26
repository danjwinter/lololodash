var _ = require("lodash");

var worker = function(city) {
  var temps = {
    hot: [],
    warm: []
  }

  function check_temp (item) {
    return item > 19;
  }
   _.forEach(city, function(city, cityname){
    if (_.every(city, check_temp)) {
      temps.hot.push(cityname)
    } else if (_.some(city, check_temp)) {
      temps.warm.push(cityname)
    }
  });

  return temps
};

module.exports = worker;
