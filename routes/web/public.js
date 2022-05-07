const public = require('express').Router()
const assert = require('http-assert');
const { SECRET } = require('../../config');
const userSchema = require('../../models/User');
const bankModel = require('../../models/Bank')
const walletModel = require('../../models/Wallet')
const rotateSchema = require('../../models/Rotate');
const productSchema = require('../../models/Product');
const infoSchema = require('../../models/Info')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

public.post('/login', async (req, res) => {
	// 获取表单数据
  const { phone, passwd } = req.body;
	// 查询
  const user = await userSchema.findOne({ phone }).select('+passwd');
	// 验证
  assert(user, 422, res.__('phone_not_exists'));
  assert(user.state, 422, res.__('user_ban'));
  assert(bcrypt.compareSync(passwd, user.passwd), 422, res.__('passwd_error'));
	// token
  const token = jwt.sign(
    { id: user._id, wallet: user.wallet },
    SECRET,
    {
      expiresIn: '1d',
    }
  );
  res.send({ message: res.__('welcom_back'), token });
});

public.post(
  '/register',
  async (req, res, next) => {
    // 获取用于传递验证码的token
    /* const token = req.headers.authorization
      ? req.headers.authorization.replace(/^Bearer /, '')
      : null;
    // 判断token是否存在
    assert(token, 422, res.__('verify_not_exist'));
    // 解码token
    try {
      req.sms = jwt.verify(token, SECRET);
    } catch (error) {
      assert(false, 422, res.__('verify_not_exist'));
    }
    // 判断token中是否有验证码
    assert(req.sms, 401, res.__('verify_not_exist')); */
    next();
  },
  async (req, res) => {
    // 从表单中获取数据
    const { name, phone, passwd, phoneCode, referrer } = req.body;
		// 验证表单数据
    if (name === '' || phone === '' || passwd === '' || phoneCode === '') {
      assert(false, 422, res.__('input_error'));
    }
		// 验证验证码
    // assert(phoneCode === req.sms.code, 422, res.__('verify_error'));

		// 创建会员初始数据
    let userModel = {
      phone,
      passwd,
    };
		// 用户是否重复
    const existstUser = await userSchema.findOne({ phone });
    assert(!existstUser, 422, res.__('phone_exists'));
		// 是否有推荐人
    if (referrer != '') {
      const refUser = await userSchema.findOne({ phone: referrer });
			// 推荐人是否存在数据库中
      assert(refUser, 422, res.__('ref_not_exists'));
			// 初始数据中添加推荐人
      userModel.referrer = refUser._id;
			// 推荐人的下级加一
      await userSchema.findByIdAndUpdate(refUser._id, {
        $inc: { inferior: 1 },
      });
    }
		// 创建会员
    const newUser = await userSchema.create(userModel);
    assert(newUser, 422, res.__('reg_fail'));
		// 创建钱包
		const walletInfo = await walletModel.create({user: newUser._id})
		// 创建银行信息
		await bankModel.create({user: newUser._id, name })
		// 添加统计信息
		// 获取当前时间戳
		const currentDay = new Date(new Date().setHours(0, 0, 0, 0)) / 1000;
		const regInfo = await infoSchema.findOne({date: currentDay, type: 'reg'})
		if(regInfo){
			await infoSchema.findByIdAndUpdate(regInfo._id, {$inc: {value: 1}})
		}else{
			await infoSchema.create({type: 'reg', value: 1, date: currentDay})
		}
    const token = jwt.sign(
      {
        id: newUser._id,
				wallet: newUser.wallet,
      },
      SECRET,
      {
        expiresIn: '1d',
      }
    );
    res.send({ message: res.__('reg_success'), token });
  }
);

public.get('/index', async (req, res) => {
  const rotates = await rotateSchema.find();
  const product = await productSchema.find({status: 0});
  res.send({ rotates, product });
});
module.exports = public
