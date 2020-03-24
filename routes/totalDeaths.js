var express = require('express');
var router = express.Router();

const data = require('../data/live-data.json')

totalDeaths = {...data}.TotalDeaths;

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.json(totalDeaths);

});

module.exports = router;