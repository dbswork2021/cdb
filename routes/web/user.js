const userRoutes = require('express').Router()
const assert = require('http-assert');
const userSchema = require('../../models/User')

userRoutes.get('/center',  async (req, res) => {
	const currentUser = await userSchema.findById(req.user.id);
	assert(currentUser, 401, res.__('phone_not_exists'))
	res.send(currentUser)
})

module.exports = userRoutes
