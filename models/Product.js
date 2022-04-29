const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	name: {type: String, required: true, trim: true, unique: true},
	issue: {type: Number, default: 1},
	price: {type: Number, default: 1},
	stock: {type: Number, default: 1},
	period: {type: Number, default: 1},
	income: {type: Number, default: 1},
	limit: {type: Number, default: 1},
	status: {type: Number, default: 1},
	imageUrl: {type: String, },
	detail: {type: String,},
},{
	versionKey: false,
})
module.exports = mongoose.model('Product', schema)
