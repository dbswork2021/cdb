const web = require('express').Router();

const auth = require('../../utils/auth');
const public = require('./public')
const user = require('./user');
const wallet = require('./wallet')
const info = require('./info');

const recharge = require('./recharge')
const withdraw = require('./withdraw')
const bank = require('./bank')

const productRoutes = require('./product');

web.use('/public', public)
web.use('/user', auth, user);
web.use('/wallet', auth, wallet);
web.use('/info', auth, info);
web.use('/recharge', auth, recharge);
web.use('/withdraw', auth, withdraw);
web.use('/bank', auth, bank);
web.use('/product', auth, productRoutes);

module.exports = web;
