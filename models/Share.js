const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	imageUrl: String,
	notes: Array,
	rules: Array
},{
	versionKey: false,
})
module.exports = mongoose.model('Share', schema)
