var express = require('express');
var router = express.Router();

const data = require('../data/live-data.json')

activeCases = {...data}.ActiveCases;

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.json(activeCases);

});

module.exports = router;