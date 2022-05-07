const withdraw = require('express').Router();
const walletSchema = require('../../models/Wallet');
const bankSchema = require('../../models/Bank');
const setSchema = require('../../models/Set');
const financeSchema = require('../../models/Finance');
const withdrawSchema = require('../../models/Withdraw')

const assert = require('http-assert');

withdraw.get('/', async (req, res) => {
  const withdrawSets = await setSchema.findOne({ type: 'withdraw' });
  // 每日提现次数
  const walletInfo = await walletSchema.findOne({ user: req.user.id });
  assert(
    walletInfo.withdrawCount < withdrawSets.sets.get('count'),
    422,
    res.__('count_not_enough')
  );
  // 每日提现时间
  const beginTime = new Date(withdrawSets.sets.get('time')[0]);
  const endTime = new Date(withdrawSets.sets.get('time')[1]);
  const currentTime = new Date();
  assert(
    currentTime.getHours() + currentTime.getMinutes() / 60 >
      beginTime.getHours() + beginTime.getMinutes() / 60 &&
      currentTime.getHours() + currentTime.getMinutes() / 60 <
        endTime.getHours() + endTime.getMinutes() / 60,
    422,
    res.__('withdraw_time_error')
  );
  const bankInfo = await bankSchema.findOne({ user: req.user.id });
  res.send(bankInfo);
});

withdraw.post('/', async (req, res) => {
  const withdrawSets = await setSchema.findOne({ type: 'withdraw' });
  const walletInfo = await walletSchema.findOne({ user: req.user.id });

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
  // 余额判断
  assert(walletInfo.blance >= req.body.amount, 422, '余额不足，无法提现');
  // 计算费率
  const fees = req.body.amount * (withdrawSets.sets.get('fees') / 100);
  // 扣除提现金额
  const newWalletInfo = await walletSchema.findByIdAndUpdate(
    walletInfo._id,
    {
      $inc: {
        blance: -req.body.amount,
        withdraw: req.body.amount,
        withdrawCount: 1,
      },
    },
    { new: true }
  );
  // 添加财务数据, 未完成
  const financeInfo = await financeSchema.create({
    user: newWalletInfo.user,
    amount: -req.body.amount,
    blance: newWalletInfo.blance,
    description: '用户提现',
    status: 0,
  });
	// 添加提现记录
  await withdrawSchema.create({
    user: req.user.id,
    amount: req.body.amount,
    fees,
    blance: req.body.amount - fees,
    bankInfo: req.body.bankInfo,
		finance: financeInfo._id
  });
  res.send({ message: res.__('submit_success') });
});

module.exports = withdraw;
