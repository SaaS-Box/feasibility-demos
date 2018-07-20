var express = require('express')
var router = express.Router()
var stripe = require('stripe')('sk_test_z52YuKBf6gGMLsv3lagY1Jkx')

/* GET users listing. */
router.get('/', function (req, res, next) {
    console.log(req.query)
    res.render('success', {title: 'success!', desc: 'Pay success!'})
})

module.exports = router
