const priceRoutes = require('express').Router();
const recordSchema = require('../../models/Record')
const orderSchema = require('../../models/Order')

priceRoutes.get('/financial', async (req, res) => {
  const result = await recordSchema.find().populate('user', {phone: 1});
  res.send(result);
});

priceRoutes.get('/rechage', async (req, res) => {
	const result = await orderSchema.find().populate('user', {phone: 1})
	res.send(result)
})


module.exports = priceRoutes;

