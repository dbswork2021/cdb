const priceRoutes = require('express').Router();
const recordSchema = require('../../models/Record');
const orderSchema = require('../../models/Order');
const withdrawSchema = require('../../models/Withdraw');

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
  const orderInfo = await withdrawSchema.findById(req.body._id);
  const date = JSON.stringify(orderInfo.createdAt)
    .replace(/[TZ]/g, ' ')
    .slice(1, 20);
  const mchOrderId = JSON.stringify(orderInfo._id).replace(/"/g, '');

  const setResult = await setSchema.findOne({ type: 'pay' });

  const signStr =
    'apply_date=' +
    date +
    '&back_url=' +
    setResult.sets.get('backUrl') +
    '&bank_code=' +
    orderInfo.bankInfo.bank.code +
    '&mch_id=' +
    setResult.sets.get('payId') +
    '&mch_transferId=' +
    orderInfo._id +
    '&receive_account=' +
    orderInfo.bankInfo.bankAccount +
    '&receive_name=' +
    orderInfo.bankInfo.name +
    '&transfer_amount=' +
    orderInfo.blance +
    '&key=' +
    setResult.sets.get('transferKey');
console.log(signStr);

  const sign = md5(signStr);

  const pdata = qs.stringify({
    apply_date:date,
    back_url: setResult.sets.get('backUrl'),
    bank_code: orderInfo.bankInfo.bank.code,
    mch_id: setResult.sets.get('payId'),
    mch_transferId: orderInfo._id,
    receive_account: orderInfo.bankInfo.bankAccount,
    receive_name: orderInfo.bankInfo.name,
    transfer_amount: orderInfo.blance,
    key: setResult.sets.get('transferKey'),
    sign_type: 'MD5',
    sign: sign,
  });
  console.log(pdata);

  const result = await axios.post(setResult.sets.get('transferApiUrl'), pdata, {
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

priceRoutes.delete('/withdraw/:id', async (req, res) => {
  const result = await withdrawSchema.findByIdAndUpdate(
    req.params.id,
    { status: 2 },
    { new: true }
  );
  res.send(result);
});

module.exports = priceRoutes;
