const userRoutes = require('express').Router();
const assert = require('http-assert');
const userSchema = require('../../models/User');
const centerSchema = require('../../models/Center');
const recordSchema = require('../../models/Record')

userRoutes.get('/center', async (req, res) => {
  const currentUser = await userSchema.findById(req.user.id);
  const centerData = await centerSchema.findOne();
  assert(currentUser, 401, res.__('phone_not_exists'));
  res.send({
    currentUser,
    centerData,
  });
});

userRoutes.get('/wallet', async (req, res) => {
  const finacial = await recordSchema.find({user: req.user.id});
	const wallet = await userSchema.findById(req.user.id).select({blance: 1, income: 1, withdraw: 1})
  res.send({finacial, wallet});
})

module.exports = userRoutes;
