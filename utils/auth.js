const assert = require('http-assert')
const jwt = require('jsonwebtoken')
const { SECRET } = require('../config')

module.exports = async (req, res, next) => {
	const token = req.headers.authorization ? req.headers.authorization.replace(/^Bearer /,'') : null

	assert(token, 401, res.__('re_login'))
    try {
			req.user = jwt.verify(token, SECRET)
    } catch (error) {
      ctx.assert(false, 401, res.__('re_login'));
    }
	assert(req.user, 401, res.__('re_login'))
	
	if(req.baseUrl.indexOf('admin') >= 0){
		if(req.user.role !== 10) {
			assert(false, 401, res.__('re_login'))
		}
	}

	await next()
}
