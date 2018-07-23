var express = require('express')
var router = express.Router()
var stripe = require('stripe')('sk_test_z52YuKBf6gGMLsv3lagY1Jkx')

/* GET users listing. */
router.get('/', function (req, res, next) {
    console.log(req.query)
    res.render('pricing', {title: 'Pricing Plan'})
})

router.post('/', async function (req, res, next) {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_SMTP,
        port: EMAIL_SMTP_PORT,
        secure: EMAIL_SMTP_SECURE,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    })

    const mailOptions = {
        from: 'zhaolei@easyact.cn',
        to: req.body.email,
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
        res.render('success', {title: 'Congratulations!', desc: 'An confirm email has sent to your mailbox.'})
    })
})

module.exports = router
