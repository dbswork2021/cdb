const bank = require('express').Router()
const bankSchema = require('../../models/Bank')

bank.post('/', async (req, res) => {
  let result = null;
  const { bank, bankAccount } = req.body;
  if (req.body._id === '') {
    result = await bankSchema.create({
      user: req.user.id,
      bank,
      bankAccount,
    });
  } else {
    result = await bankSchema.findByIdAndUpdate(
      req.body._id,
      {
        bank,
        bankAccount,
      },
      { new: true }
    );
  }
  res.send(result);
});

module.exports = bank
