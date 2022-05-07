const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	phone: {
		type: String,
		trim: true,
		unique: true,
	},
	passwd: {
		type: String,
		trim: true,
		select: false,
		set: (val) => {
			return require('bcryptjs').hashSync(val, 10)
		}
	},
	level: {
		type: Number,
		default: 0,
	},
	referrer: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: 'User'
	},
	inferior: {
		type: Number,
		default: 0
	},
	state: {
		type: Number,
		default: 1
	},
},{
		timestamps: true,
	versionKey: false,
})
module.exports = mongoose.model('User', schema)
