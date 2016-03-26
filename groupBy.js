var _ = require("lodash");

var worker = function(users) {

  return _.chain(users).groupBy('username')
    .map(function(item, username){
      return {username: username, comment_count: _.size(item) };
    })
    .sortBy(function(counted){
      return -counted['comment_count']
    })
};

module.exports = worker;
