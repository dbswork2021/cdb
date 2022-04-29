const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	name: {type: String, required: true, trim: true, unique: true},
	category: {type: Number, default: 1},
	imageUrl: {type: String, },
	readCount: {type: Number, default: 0},
	detail: {type: String,},
},{
		timestamps: true,
	versionKey: false,
})
module.exports = mongoose.model('Post', schema)
