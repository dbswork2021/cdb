const orderRoutes = require('express').Router();
const assert = require('http-assert')
const orderSchema = require('../../models/Order');
const setSchema = require('../../models/Set')
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

	const setResult = await setSchema.findOne({type: 'pay'})

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
    '&pay_type=300&trade_amount=' +
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
    pay_type: '300',
    trade_amount: orderInfo.amount,
    version: '1.0',
    sign_type: 'MD5',
    sign: sign,
  });

  const result = await axios.post(
    'https://interface.sskking.com/pay/web',
    pdata,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      },
    }
  );

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
	const withdrawSets = await setSchema.findOne({type: 'withdraw'})
	const countIsEnlaugh = req.user.withdrawCount > withdrawSets.sets.get('count')
	assert(countIsEnlaugh, 422, res.__('test'))
	console.log(req.user.withdrawCount > withdrawSets.sets.get('count'));
	console.log(req.user);
	
	
	
})

module.exports = orderRoutes;
