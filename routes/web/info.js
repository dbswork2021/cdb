const infoRoutes = require('express').Router()
const postSchema = require('../../models/Post')
const aboutSchema = require('../../models/About')

infoRoutes.get('/post', async (req, res) => {
	const result = await postSchema.find()
	res.send(result)
})

infoRoutes.delete('/post/:id', async (req, res) => {
	const result = await postSchema.findByIdAndUpdate(req.params.id, {$inc: {readCount: 1}})
	res.send()
})

infoRoutes.get('/about', async (req, res) => {
	const result = await aboutSchema.findOne()
	res.send(result)
})

module.exports = infoRoutes

