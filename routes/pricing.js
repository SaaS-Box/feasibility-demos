var express = require('express')
var router = express.Router()
var stripe = require('stripe')('sk_test_z52YuKBf6gGMLsv3lagY1Jkx')

/* GET users listing. */
router.get('/', function (req, res, next) {
    console.log(req.query)
    res.render('pricing', {title: 'Pricing Plan', params: req.query, desc: JSON.stringify(req.query)})
})

router.post('/', async function (req, res, next) {
    let body = req.body
    console.log('Subscribe', body)
})

module.exports = router
