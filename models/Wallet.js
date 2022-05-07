const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	user: {type: mongoose.SchemaTypes.ObjectId, ref: "User"},
	blance: {type: Number, default: 0}, // 钱包余额
	withdraw: {Type: Number, default: 0}, // 已提现
	withdrawCount: {type: Number, default: 0}, // 每日提现次数
	income: {type: Number, default: 0}, // 总收益

},{
	versionKey: false,
})
module.exports = mongoose.model('Wallet', schema)
