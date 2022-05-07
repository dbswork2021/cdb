const bank = require('express').Router()
const bankSchema = require('../../models/Bank')

// 获取银行卡信息
bank.get('/:id', async (req, res) => {
	const {id} = req.params
	let result = null
	if(id === 'undefined'){
   result = await bankSchema.find().populate('user', {phone: 1});
	}else{
   result = await bankSchema.find({user: id}).populate('user', {phone: 1});
	}
  res.send(result);
});

bank.post('/', async (req, res) => {
	const {_id, name} = req.body
	const result = await bankSchema.findByIdAndUpdate(_id, {name: name}, {new: true}).populate('user', {phone: 1})
	res.send(result)
});

module.exports = bank

