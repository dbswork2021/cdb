const priceRoutes = require('express').Router();
const recordSchema = require('../../models/Record')

priceRoutes.get('/financial', async (req, res) => {
  const result = await recordSchema.find().populate('user', {phone: 1});
  res.send(result);
});


module.exports = priceRoutes;

