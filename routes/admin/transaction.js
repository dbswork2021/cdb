const transaction = require('express').Router()
const tridingSchema = require('../../models/Transaction')

transaction.get('/', async (req, res) => {
	const result = await tridingSchema.find().populate('product', {name: 1}).populate('user', {phone: 1})
	res.send(result)
})

module.exports = transaction
