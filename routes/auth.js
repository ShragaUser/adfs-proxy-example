var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', passport.authenticate("shraga"), function (req, res, next) {
    console.log('asdasd');
    res.status(200).json(req.user);
});

/* GET home page. */
router.post('/callback', passport.authenticate("shraga"), function (req, res, next) {
    //res.send(req.user);

    res.redirect('/');
});


module.exports = router;