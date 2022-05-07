const withdraw = require('express').Router();

const withdrawSchema = require('../../models/Withdraw');
const setSchema = require('../../models/Set');
const walletSchema = require('../../models/Wallet');
const financeSchema = require('../../models/Finance');
const infoSchema = require('../../models/Info')

const qs = require('querystring');
const md5 = require('md5');
const axios = require('axios');

withdraw.get('/', async (_, res) => {
  const result = await withdrawSchema.find().populate('user', { phone: 1 });
  res.send(result);
});

withdraw.post('/', async (req, res) => {
  const withdrawInfo = await withdrawSchema.findById(req.body._id);
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
    withdrawInfo.bankInfo.name +
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
    receive_name: withdrawInfo.bankInfo.name,
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
  if (result.data.respCode === 'SUCCESS') {
    // 更新提现记录状态
    await withdrawSchema.findByIdAndUpdate(withdrawInfo._id, { status: 4 });
    res.send({ message: '提交成功' });
  } else {
    console.log('-----------------------------');
    console.log(result.data.errorMsg);
    res
      .status(400)
      .send({ message: '提交失败，请让会员检查提现信息后重新申请' });
  }
});

withdraw.put('/', async (req, res) => {
  // 更新提现记录状态
  const result = await withdrawSchema.findByIdAndUpdate(
    req.body._id,
    { status: 1 },
    { new: true }
  );
  // 更新财务明细状态
  await financeSchema.findByIdAndUpdate(result.finance, { status: 1 });
    // 添加统计信息
    // 获取当前时间戳
    const currentDay = new Date(new Date().setHours(0, 0, 0, 0)) / 1000;
    const withdrawStats = await infoSchema.findOne({
      date: currentDay,
      type: 'withdraw',
    });
    if (withdrawStats) {
      await infoSchema.findByIdAndUpdate(withdrawStats._id, {
        $inc: { value: result.blance },
      });
    } else {
      await infoSchema.create({ type: 'withdraw', value: result.blance, date: currentDay });
    }
  res.send(result);
});

withdraw.delete('/:id', async (req, res) => {
  // 更新提现记录状态
  const result = await withdrawSchema.findByIdAndUpdate(
    req.params.id,
    { status: 2 },
    { new: true }
  );
  // 返还用户提现金额, 扣除已提现金额，扣除提现次数
  await walletSchema.findOneAndUpdate(
    { user: result.user._id },
    {
      $inc: {
        blance: result.amount,
        withdraw: -result.amount,
        withdrawCount: -1,
      },
    }
  );
  // 更新财务明细
  await financeSchema.findByIdAndUpdate(result.finance, { status: 2 });
  res.send(result);
});

module.exports = withdraw;
