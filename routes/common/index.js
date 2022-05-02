const multer = require('multer')
const upload = multer({dest: 'public/uploads/'})
const svgCaptcha = require('svg-captcha')
const jwt = require('jsonwebtoken')
const { SECRET } = require('../../config')
const auth = require('../../utils/auth')

const utils = require('express').Router()

utils.get('/captcha', (req, res) => {
	var captcha = svgCaptcha.create();
	const token = jwt.sign({code:captcha.text}, SECRET, {expiresIn: '1d'})
	res.status(200).send({svg:captcha.data, token });
})

utils.post('/sms', (req, res) => {

})

utils.post('/uploads', auth, upload.single('file'), async (req, res) => {
	res.send(req.file.filename)
})

utils.post('/notify', async (req, res) => {
	console.log("充值回调通知");
	
	console.log(req.body);
	res.send("success")
})



module.exports = utils


