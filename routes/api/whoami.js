var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log("ip: " + req.ip);
    res.send(req.headers);
});

module.exports = router;
