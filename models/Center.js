const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	imageUrl: String,
	avatarUrl: String
},{
	versionKey: false,
})
module.exports = mongoose.model('Center', schema)
