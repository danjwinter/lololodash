var _ = require("lodash");

var worker = function(users) {
  return _.template('Hello <%= name %> (logins: <%= _.size(login) %>)')(users)
};

module.exports = worker;
