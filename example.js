
var Gitlab = require('node-gitlab');
var co = require('co');
var wrap = require('./');

var gitlab = Gitlab.create({
  api: 'https://gitlab.com/api/v3',
  privateToken: 'enEWf516mA168tP6BiVe',
  requestTimeout: 15000,
});

gitlab = wrap(gitlab);

co(function* () {
  var repos = yield gitlab.projects.list();
  console.log(repos);
})();
