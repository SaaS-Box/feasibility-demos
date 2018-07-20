var express = require('express')
var router = express.Router()
var stripe = require('stripe')('sk_test_z52YuKBf6gGMLsv3lagY1Jkx')
const nodemailer = require('nodemailer')

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Subscribe SaaSX now!'})
})

router.post('/', async function (req, res, next) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.exmail.qq.com',
        port: 465,
        secure: true,
        auth: {
            user: 'zhaolei@easyact.cn',
            pass: 'Aoo@0916'
        }
    })

    const mailOptions = {
        from: 'zhaolei@easyact.cn',
        to: 'zhaolei@easyact.cn',
        subject: 'Renew your SaaS subscription!',
        text: 'That was easy!',
        html: '<a href="http://localhost:3000/emailpayment">Renew my account!</a>'
    }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
            return next(error)
        }
        console.log('Email sent: ' + info.response)
        res.render('index', {desc: 'An email has sent to your mailbox.'})
    })
})

module.exports = router
