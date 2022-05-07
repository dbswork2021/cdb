const recharge = require('express').Router();
const rechargeSchema = require('../../models/Recharge');
const financeSchema = require('../../models/Finance')
const setSchema = require('../../models/Set');

const axios = require('axios');
const qs = require('querystring');
const md5 = require('md5');

recharge.post('/', async (req, res) => {
  // 添加财务数据
  const financeInfo = await financeSchema.create({
    user: req.user.id,
    description: '用户充值',
    status: 0,
  });
  // 添加充值记录
  const rechargeInfo = await rechargeSchema.create({
    ...req.body,
    user: req.user.id,
    note: '会员充值',
    finance: financeInfo._id,
  });
  const date = JSON.stringify(rechargeInfo.createdAt)
    .replace(/[TZ]/g, ' ')
    .slice(1, 20);
  const mchOrderId = JSON.stringify(rechargeInfo._id).replace(/"/g, '');

  const setResult = await setSchema.findOne({ type: 'pay' });

  const signStr =
    'goods_name=' +
    rechargeInfo.note +
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
    rechargeInfo.amount +
    '&version=1.0&key=' +
    setResult.sets.get('payKey');

  const sign = md5(signStr);

  const pdata = qs.stringify({
    goods_name: rechargeInfo.note,
    mch_id: setResult.sets.get('payId'),
    mch_order_no: mchOrderId,
    notify_url: setResult.sets.get('notifyUrl'),
    order_date: date,
    page_url: setResult.sets.get('jumpUrl'),
    pay_type: setResult.sets.get('payType'),
    trade_amount: rechargeInfo.amount,
    version: '1.0',
    sign_type: 'MD5',
    sign: sign,
  });
  const result = await axios.post(setResult.sets.get('payApiUrl'), pdata, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    },
  });

  if (result.data.respCode === 'SUCCESS') {
    if (result.data.tradeResult === '1') {
      res.send(result.data.payInfo);
    } else {
      await rechargeSchema.findByIdAndDelete(rechargeInfo._id);
      await financeSchema.findByIdAndDelete(financeInfo._id);
      res.status(400).send({ message: '提交失败，请联系客服' });
    }
  } else {
    await rechargeSchema.findByIdAndDelete(rechargeInfo._id);
    await financeSchema.findByIdAndDelete(financeInfo._id);
    res.status(400).send({ message: '提交失败，请联系客服' });
  }
});

module.exports = recharge;
