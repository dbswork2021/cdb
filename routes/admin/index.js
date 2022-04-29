const routes = require('express').Router();
const assert = require('http-assert');
const { SECRET } = require('../../config');
const adminSchema = require('../../models/Admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

const auth = require('../../utils/auth')
const userRoutes = require('./user')
const infoRoutes = require('./info')
const productRoutes = require('./product')

routes.post('/login', async (req, res) => {
  const { username, passwd, captchaCode } = req.body;
	
  const oldToken = String(req.headers.authorization || '').replace('Bearer ','')
	assert(oldToken, 422, "缺少凭证")
	const verify = jwt.verify(oldToken, SECRET)
	assert(verify.code.toLowerCase() === captchaCode.toLowerCase(), 422, "验证码错误")
  const user = await adminSchema.findOne({ username }).select('+passwd');
	assert(user, 422, "用户不存在")
	assert(bcrypt.compareSync(passwd, user.passwd), 422, "密码错误")
	const token = jwt.sign({id: user._id, name: user.username, role: 10}, SECRET, {expiresIn: '1d'})
	res.send({message: "登陆成功，欢迎回来", token})
});

routes.post('/register', async (req, res) => {
  const { username, passwd, nick, secretCode } = req.body;
  assert(secretCode === SECRET, 422, '安全码错误');
  const existstUser = await adminSchema.findOne({ username });
  assert(!existstUser, 422, '用户已存在');
  const newUser = await adminSchema.create({ username, passwd, nick });
	assert(newUser, 422, "注册失败，请重新注册")
  const token = jwt.sign({id: newUser._id, name: newUser.username, role: 10}, SECRET, {expiresIn: '1d'});
  res.send({ message: '创建用户成功', token });
});

routes.use('/user', auth, userRoutes)
routes.use('/info', auth, infoRoutes)
routes.use('/product', auth, productRoutes)

module.exports = routes;
