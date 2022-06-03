var express = require('express');
var router = express.Router();
var ctl_login = require('../controller/ctl-login');
let ctl_index = require('../controller/ctl_index');
let ctl_getPlaylists = require('../controller/ctl_getPlaylists');
let ctl_play = require('../controller/ctl_play');

/* GET home page. */
router.get('/', ctl_index); 

router.post('/login', ctl_login);
router.get('/getPlaylists', ctl_getPlaylists);
router.get('/play/:playlist/:title', ctl_play);

module.exports = router;
