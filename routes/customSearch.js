var express = require('express');
var router = express.Router();

const data = require('../data/live-data.json')

/* GET users listing. */
router.get('/:country_name', function(req, res, next) {
    const country = req.params.country_name;
    const totalCases = data.TotalCases[country];
    const totalDeaths = data.TotalDeaths[country];
    const totalReacovered = data.TotalRecovered[country];
    const activeCases = data.ActiveCases[country];
	res.json({
        totalCases,
        totalDeaths,
        totalReacovered,
        activeCases
    });
});

module.exports = router;