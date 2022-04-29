const userRoutes = require('express').Router();
const assert = require('http-assert');
const userSchema = require('../../models/User');
const centerSchema = require('../../models/Center');

userRoutes.get('/center', async (req, res) => {
  const currentUser = await userSchema.findById(req.user.id);
  const centerData = await centerSchema.findOne();
  assert(currentUser, 401, res.__('phone_not_exists'));
  res.send({
    currentUser,
    centerData,
  });
});

module.exports = userRoutes;
