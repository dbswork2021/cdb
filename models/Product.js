const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	name: {type: String, required: true, trim: true, unique: true}, //产品名
	issue: {type: Number, default: 1}, // 期数
	price: {type: Number, default: 1}, // 单价
	stock: {type: Number, default: 1}, // 库存
	period: {type: Number, default: 1}, // 运行周期
	income: {type: Number, default: 1}, // 收益
	limit: {type: Number, default: 1}, // 限购
	status: {type: Number, default: 1}, // 状态
	imageUrl: {type: String, }, // 缩略图
	detail: {type: String,}, // 详情
},{
	versionKey: false,
})
module.exports = mongoose.model('Product', schema)
