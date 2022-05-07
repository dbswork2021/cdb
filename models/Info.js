const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	type: {type: String},// 注册，充值，提现，收益
	value: {type: Number, default: 0},
	date: {type: Number}
},{
	versionKey: false,
})
module.exports = mongoose.model('Info', schema)
