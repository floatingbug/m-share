var express = require('express');
var router = express.Router();
var ctl_login = require('../controller/ctl-login');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/login', ctl_login)

module.exports = router;
