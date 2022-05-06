const priceRoutes = require('express').Router();
const qs = require('querystring');
const userSchema = require('../../models/User');
const recordSchema = require('../../models/Record');
const orderSchema = require('../../models/Order');
const withdrawSchema = require('../../models/Withdraw');
const setSchema = require('../../models/Set');

const md5 = require('md5');
const axios = require('axios');

priceRoutes.get('/financial', async (req, res) => {
  const result = await recordSchema.find().populate('user', { phone: 1 });
  res.send(result);
});

priceRoutes.get('/rechage', async (req, res) => {
  const result = await orderSchema.find().populate('user', { phone: 1 });
  res.send(result);
});

priceRoutes.get('/withdraw', async (req, res) => {
  const result = await withdrawSchema.find().populate('user', { phone: 1 });
  res.send(result);
});

priceRoutes.post('/withdraw', async (req, res) => {
  const withdrawInfo = await withdrawSchema
    .findById(req.body._id)
    .populate('user', { nick: 1 });
  const date = JSON.stringify(withdrawInfo.createdAt)
    .replace(/[TZ]/g, ' ')
    .slice(1, 20);
  const mchOrderId = JSON.stringify(withdrawInfo._id).replace(/"/g, '');

  const setResult = await setSchema.findOne({ type: 'pay' });

  const signStr =
    'apply_date=' +
    date +
    '&back_url=' +
    setResult.sets.get('backUrl') +
    '&bank_code=' +
    withdrawInfo.bankInfo.bank.code +
    '&mch_id=' +
    setResult.sets.get('payId') +
    '&mch_transferId=' +
    mchOrderId +
    '&receive_account=' +
    withdrawInfo.bankInfo.bankAccount +
    '&receive_name=' +
    withdrawInfo.user.nick +
    '&transfer_amount=' +
    withdrawInfo.blance +
    '&key=' +
    setResult.sets.get('transferKey');

  const sign = md5(signStr);

  const pdata = qs.stringify({
    apply_date: date,
    back_url: setResult.sets.get('backUrl'),
    bank_code: withdrawInfo.bankInfo.bank.code,
    mch_id: setResult.sets.get('payId'),
    mch_transferId: mchOrderId,
    receive_account: withdrawInfo.bankInfo.bankAccount,
    receive_name: withdrawInfo.user.nick,
    transfer_amount: withdrawInfo.blance,
    key: setResult.sets.get('transferKey'),
    sign_type: 'MD5',
    sign: sign,
  });

  const result = await axios.post(setResult.sets.get('transferApiUrl'), pdata, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    },
  });
	console.log(result.data);
  if (result.data.respCode === 'SUCCESS') {
    await withdrawSchema.findByIdAndUpdate(
      withdrawInfo._id,
      { status: 4 },
      { new: true }
    );
    res.send({message: '提交成功'});
  } else {
    res
      .status(400)
      .send({ message: '提交失败，请让会员检查提现信息后重新申请' });
  }
});

priceRoutes.put('/withdraw', async (req, res) => {
   const result = await withdrawSchema.findByIdAndUpdate(
      req.body._id,
      { status: 1 },
      { new: true }
    );
		const userInfo = userSchema.findById(result.user)
		// 添加财务明细
			await recordSchema.create({
				user: userInfo._id,
				amount: result.amount,
				blance: userInfo.blance,
				description: "用户提现"
			})
	
  res.send(result);
});

priceRoutes.delete('/withdraw/:id', async (req, res) => {
  const result = await withdrawSchema.findByIdAndUpdate(
    req.params.id,
    { status: 2 },
    { new: true }
  );
	// 返还用户提现金额
	await userSchema.findByIdAndUpdate(result.user._id, {$inc: {blance: result.amount}})
  res.send(result);
});

module.exports = priceRoutes;
