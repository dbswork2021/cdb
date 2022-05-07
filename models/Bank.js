const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	user: {type: mongoose.SchemaTypes.ObjectId, ref: "User"},
	name: {type: String},
	bank: {
		code: {type: String, default: ''},
		value: {type: String, default: ''}
	},
	bankAccount: {type: String, trim: true, default: ''},

},{
	versionKey: false,
})
module.exports = mongoose.model('Bank', schema)
