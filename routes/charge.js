var express = require('express')
var router = express.Router()
var stripe = require('stripe')('sk_test_z52YuKBf6gGMLsv3lagY1Jkx')

router.get('/', function (req, res, next) {
    console.log(req.query)
    res.cookie('stripe', req.query)
    res.render('charge', {title: 'Confirm your payment'})
})

router.post('/', async function (req, res, next) {
    console.log('Charging')
    stripe.charges.create({
        amount: 100,
        currency: 'usd',
        source: req.cookies.stripe.source,
    })
        .then(charge => res.render('success', {title: 'pay success!', desc: JSON.stringify(charge)}))
        .catch(err => {
            console.error(err)
            next(err)
        })
})

module.exports = router
