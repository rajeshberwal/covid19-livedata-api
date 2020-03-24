var express = require('express');
var router = express.Router();

const data = require('../data/live-data.json')

countries = {...data}.TotalCases;

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.json(countries);

});

module.exports = router;