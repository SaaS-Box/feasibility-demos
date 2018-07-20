const express = require('express')
const router = express.Router()
const stripe = require('stripe')('sk_test_z52YuKBf6gGMLsv3lagY1Jkx')

router.get('/', function (req, res, next) {
    console.log('Charging', req.query)
    stripe.charges.create({
        amount: 100,
        currency: 'usd',
        source: req.query.source,
    })
        .then(charge => res.render('success', {title: 'pay success!', desc: JSON.stringify(charge)}))
        .catch(err => {
            console.error(err)
            next(err)
        })
})

module.exports = router
