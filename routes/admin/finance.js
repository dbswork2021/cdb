const finance = require('express').Router()
const financeSchema = require('../../models/Finance')

finance.get('/', async (req, res) => {
  const result = await financeSchema.find().populate('user', { phone: 1 });
  res.send(result);
});

module.exports = finance
