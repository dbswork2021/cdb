const webRoutes = require('express').Router();
const assert = require('http-assert');
const { SECRET } = require('../../config');
const userSchema = require('../../models/User');
const rotateSchema = require('../../models/Rotate')
const productSchema = require('../../models/Product')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const auth = require('../../utils/auth')
const userRoutes = require('./user')
const infoRoutes = require('./info')
const productRoutes = require('./product')


webRoutes.post('/login', async (req, res) => {
  const { phone, passwd } = req.body;
  /* const oldToken = String(req.headers.authorization || '').replace('Bearer ','')
	assert(oldToken, 422, "缺少凭证")
	const verify = jwt.verify(oldToken, SECRET)
	assert(verify.code.toLowerCase() === phoneCode.toLowerCase(), 422, res__('verify_error')) */
  const user = await userSchema.findOne({ phone }).select('+passwd');
  assert(user, 422, res.__('phone_not_exists'));
	assert(user.state, 422, res.__('user_ban'));
  assert(bcrypt.compareSync(passwd, user.passwd), 422, res.__('passwd_error'));
  const token = jwt.sign({ id: user._id, name: user.username, role: 1 }, SECRET, {
    expiresIn: '1d',
  });
  res.send({ message:res.__('welcom_back'), token });
});

webRoutes.post('/register', async (req, res) => {
  const { nick, phone, passwd, phoneCode, referrer } = req.body;
	if(nick === '' || phone === '' || passwd === ''){
		assert(false, 422, res.__('input_error'))
	}
  let userModel = {
    phone,
    passwd,
  };
  // assert(phoneCode === SECRET, 422, '安全码错误');
  const existstUser = await userSchema.findOne({ phone });
	
  assert(!existstUser, 422, res.__('phone_exists'));
  if (referrer != '') {
    const refUser = await userSchema.findOne({ phone: referrer });
    assert(refUser, 401, res.__('ref_not_exists'));
    userModel.referrer = refUser._id;
		await userSchema.findByIdAndUpdate(refUser._id,{$inc: {inferior: 1}})
  }
	const newUser = await userSchema.create(userModel);
  assert(newUser, 422,res.__('reg_fail'));
  const token = jwt.sign({ id: newUser._id, name: newUser.username , role: 1}, SECRET, {
    expiresIn: '1d',
  });
  res.send({ message: res.__('reg_success'), token });
});

webRoutes.get('/index', async(req, res) => {
	const rotates = await rotateSchema.find()
	const product = await productSchema.find()
	res.send({rotates, product})
})

webRoutes.use('/user', auth, userRoutes)
webRoutes.use('/info', auth, infoRoutes)
webRoutes.use('/product', auth, productRoutes)

module.exports = webRoutes;
