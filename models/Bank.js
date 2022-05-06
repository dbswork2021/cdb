const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	user: {type: mongoose.SchemaTypes.ObjectId, ref: "User"},
	bank: {
		code: String,
		value: String
	},
	bankAccount: {type: String, trim: true},

},{
	versionKey: false,
})
module.exports = mongoose.model('Bank', schema)
