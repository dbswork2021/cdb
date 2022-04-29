const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	imgUrl: {type: String}
},{
	versionKey: false,
})
module.exports = mongoose.model('Rotate', schema)
