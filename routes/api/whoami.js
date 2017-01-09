var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var ip =  req.connection.remoteAddress || req.headers['x-forwarded-for'];
    var language = req.headers['accept-language'].split(',')[0];
    var regex = /\([\w\W]+?\)/g
    var software = req.headers['user-agent'].match(regex)[0].replace(/[\(\)]/g, "");
    console.log({
        ipaddress: ip,
        language: language,
        software: software
    });
    res.send(req.headers);
});

module.exports = router;
