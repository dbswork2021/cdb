const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	type: String,
	sets: Map
},{
	versionKey: false,
})
module.exports = mongoose.model('Set', schema)
