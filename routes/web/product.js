const productRoutes = require('express').Router()
const assert = require('http-assert')
const productSchema = require('../../models/Product')
const userSchema = require('../../models/User')
const recordSchema = require('../../models/Record')
const tridingSchema = require('../../models/Triding')


productRoutes.get('/depot', async (req, res) => {
	const result = await tridingSchema.find({user: req.user.id, state:{$gt: 0}}).populate('product')
	res.send(result)
})

productRoutes.post('/buy', async (req, res) => {
	const currentUser = await userSchema.findById(req.user.id)
	assert(currentUser.blance >= req.body.price, 400, res.__('blance_not_enough'))
	await productSchema.findOneAndUpdate(req.body._id, {$inc: {stock: -1}}) // 库存减一
  const newUserInfo =	await userSchema.findByIdAndUpdate(currentUser._id, {$inc: {blance: -req.body.price}}, {new: true}) // 扣除余额
	await recordSchema.create({user: newUserInfo._id, amount: -req.body.price, blance: newUserInfo.blance, description: "购买" + req.body.name}) // 财务明细
	await tridingSchema.create({user: newUserInfo._id, product: req.body._id, income: req.body.income, price: req.body.price}) // 交易记录
	res.send({message: res.__('triding_done')})
})




module.exports = productRoutes
