const routes = require('express').Router();

const auth = require('../../utils/auth')

const public = require('./public')

const user= require('./user')
const wallet = require('./wallet')
const bank = require('./bank')

const product = require('./product')
const transaction = require('./transaction')

const rotate = require('./rotate')
const post = require('./post')
const info = require('./info')
const finance = require('./finance')
const recharge = require('./recharge')
const withdraw = require('./withdraw')

const setRoutes = require('./set')


routes.use('/public', public)

routes.use('/user', auth, user)
routes.use('/wallet', auth, wallet)
routes.use('/bank', auth, bank)

routes.use('/product', auth, product)
routes.use('/transaction', auth, transaction)

routes.use('/finance', auth, finance)
routes.use('/recharge', auth, recharge)
routes.use('/withdraw', auth, withdraw)

routes.use('/rotate', auth, rotate)
routes.use('/post', auth, post)
routes.use('/info', auth, info)

routes.use('/set', auth, setRoutes)

module.exports = routes;
