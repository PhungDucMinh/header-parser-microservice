var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var ip =  req.headers['x-forwarded-for'];
    var language = req.headers['accept-language'].split(',')[0];
    var regex = /\([\w\W]+?\)/g
    var software = req.headers['user-agent'].match(regex)[0].replace(/[\(\)]/g, "");
    var result = {
        ipaddress: ip,
        language: language,
        software: software
    };
    console.log(result);
    res.send(result);
});

module.exports = router;
