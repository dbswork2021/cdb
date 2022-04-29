const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	imageUrl: String,
	bgUrl: String,
	rules: Array
},{
	versionKey: false,
})
module.exports = mongoose.model('Share', schema)
