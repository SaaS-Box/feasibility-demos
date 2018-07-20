var express = require('express')
var router = express.Router()
var stripe = require('stripe')('sk_test_z52YuKBf6gGMLsv3lagY1Jkx')

router.get('/', async function (req, res, next) {
    console.log('Email charging', req.body)
    let source = await stripe.sources.create({
        type: 'alipay',
        amount: 100,
        currency: 'usd',
        redirect: {
            return_url: 'http://localhost:3000/charge',
        }
    })
    console.log('source', JSON.stringify(source))
    res.redirect(source.redirect.url)
})

module.exports = router
