const recharge = require('express').Router()
const rechargeSchema = require('../../models/Recharge')

recharge.get('/', async (req, res) => {
  const result = await rechargeSchema.find().populate('user', { phone: 1 });
  res.send(result);
});

module.exports = recharge
