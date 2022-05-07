const wallet = require('express').Router()
const walletSchema = require('../../models/Wallet')
const financelSchema = require('../../models/Finance')

wallet.get('/', async (req, res) => {
  const finacial = await financelSchema.find({user: req.user.id});
	const wallet = await walletSchema.findOne({user:req.user.id})
  res.send({finacial, wallet});
})
module.exports = wallet
