const orderRoutes = require('express').Router();
const assert = require('http-assert');
const orderSchema = require('../../models/Order');
const setSchema = require('../../models/Set');
const bankSchema = require('../../models/Bank');
const withdrawSchema = require('../../models/Withdraw');
const axios = require('axios');
const qs = require('querystring');
const md5 = require('md5');

orderRoutes.post('/recharge', async (req, res) => {
  const orderInfo = await orderSchema.create({
    ...req.body,
    user: req.user.id,
    note: '会员充值',
  });
  const date = JSON.stringify(orderInfo.createdAt)
    .replace(/[TZ]/g, ' ')
    .slice(1, 20);
  const mchOrderId = JSON.stringify(orderInfo._id).replace(/"/g, '');

  const setResult = await setSchema.findOne({ type: 'pay' });

  const signStr =
    'goods_name=' +
    orderInfo.note +
    '&mch_id=' +
    setResult.sets.get('payId') +
    '&mch_order_no=' +
    mchOrderId +
    '&notify_url=' +
    setResult.sets.get('notifyUrl') +
    '&order_date=' +
    date +
    '&page_url=' +
    setResult.sets.get('jumpUrl') +
    '&pay_type=' +
    setResult.sets.get('payType') +
    '&trade_amount=' +
    orderInfo.amount +
    '&version=1.0&key=' +
    setResult.sets.get('payKey');

  const sign = md5(signStr);

  const pdata = qs.stringify({
    goods_name: orderInfo.note,
    mch_id: setResult.sets.get('payId'),
    mch_order_no: mchOrderId,
    notify_url: setResult.sets.get('notifyUrl'),
    order_date: date,
    page_url: setResult.sets.get('jumpUrl'),
    pay_type: setResult.sets.get('payType'),
    trade_amount: orderInfo.amount,
    version: '1.0',
    sign_type: 'MD5',
    sign: sign,
  });
  console.log(pdata);

  const result = await axios.post(setResult.sets.get('payApiUrl'), pdata, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    },
  });

  console.log(result.data);

  if (result.data.respCode === 'SUCCESS') {
    if (result.data.tradeResult === '1') {
      res.send(result.data.payInfo);
    } else {
      await orderSchema.findByIdAndDelete(orderInfo._id);
      res.status(400).send({ message: '提交失败，请联系客服' });
    }
  } else {
    await orderSchema.findByIdAndDelete(orderInfo._id);
    res.status(400).send({ message: '提交失败，请联系客服' });
  }
});

orderRoutes.get('/withdraw', async (req, res) => {
  const withdrawSets = await setSchema.findOne({ type: 'withdraw' });
  // 每日提现次数
  const countIsEnough = req.user.withdrawCount < withdrawSets.sets.get('count');
  assert(countIsEnough, 422, res.__('count_not_enough'));
  // 每日提现时间
  const beginTime = new Date(withdrawSets.sets.get('time')[0]);
  const endTime = new Date(withdrawSets.sets.get('time')[1]);
  const currentTime = new Date();
  assert(
    currentTime.getHours() > beginTime.getHours() && currentTime.getHours() < endTime.getHours(),
    422,
    res.__('withdraw_time_error')
  );
  const withdrawInfo = await bankSchema.findOne({ user: req.user.id });

  res.send(withdrawInfo);
});

orderRoutes.put('/withdraw', async (req, res) => {
  let result = null;
  console.log(req.bode);
  const { name, bank, bankAccount } = req.body;

  if (req.body._id === '') {
    result = await bankSchema.create({
      user: req.user.id,
      name,
      bank,
      bankAccount,
    });
  } else {
    result = await bankSchema.findByIdAndUpdate(
      req.body._id,
      {
        name,
        bank,
        bankAccount,
      },
      { new: true }
    );
  }
  res.send(result);
});

orderRoutes.post('/withdraw', async (req, res) => {
  const withdrawSets = await setSchema.findOne({ type: 'withdraw' });
	
	
	console.log(req.body.amount % withdrawSets.sets.get('multi') );
	
  assert(
    req.body.amount % withdrawSets.sets.get('multi') === 0,
    422,
    '请仔细阅读提现规定'
  );
  assert(
    req.body.amount >= withdrawSets.sets.get('min'),
    422,
    '请仔细阅读提现规定2'
  );
  const fees = req.body.amount * (withdrawSets.sets.get('fees') / 100);
  await withdrawSchema.create({
    user: req.user.id,
    amount: req.body.amount,
    fees,
    blance: req.body.amount - fees,
    bankInfo: req.body.bankInfo,
  });
  res.send({message: res.__('submit_success')});
});

module.exports = orderRoutes;
