const priceRoutes = require('express').Router();
const recordSchema = require('../../models/Record')

priceRoutes.get('/financial', async (req, res) => {
  const result = await recordSchema.find();
	console.log(result);
	
  res.send(result);
});


module.exports = priceRoutes;

