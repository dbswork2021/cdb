const userRoutes = require('express').Router();
const assert = require('http-assert');
const userSchema = require('../../models/User');
const setSchema = require('../../models/Set');

userRoutes.get('/center', async (req, res) => {
  const currentUser = await userSchema.findById(req.user.id);
  const centerData = await setSchema.findOne({type: 'center'});
  assert(currentUser, 401, res.__('phone_not_exists'));
  res.send({
    currentUser,
    centerData,
  });
});


module.exports = userRoutes;
