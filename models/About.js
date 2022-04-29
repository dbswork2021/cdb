const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	name: {type: String, required: true, trim: true, unique: true},
	detail: {type: String,},
},{
	versionKey: false,
})
module.exports = mongoose.model('About', schema)
