const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	user: {type: mongoose.SchemaTypes.ObjectId, ref:'User'},
	payType: {text: String, value: String},
	amount: {type: Number},
	note: {type: String },
	status: {type: Number, default: 0},
},{
	timestamps: true,
	versionKey: false,
})
module.exports = mongoose.model('Order', schema)
