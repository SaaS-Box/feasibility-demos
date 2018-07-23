var express = require('express')
var router = express.Router()
var stripe = require('stripe')('sk_test_z52YuKBf6gGMLsv3lagY1Jkx')
const nodemailer = require('nodemailer')

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Welcome to Awsome SaaS!'})
})

module.exports = router
