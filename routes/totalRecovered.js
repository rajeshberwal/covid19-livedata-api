var express = require('express');
var router = express.Router();

const data = require('../data/live-data.json')

totalRecovered = {...data}.TotalRecovered;

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.json(totalRecovered);
});

module.exports = router;