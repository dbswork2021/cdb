const wallet = require('express').Router();
const walletSchema = require('../../models/Wallet');
const financeSchema = require('../../models/Finance');
const rechargeSchema = require('../../models/Recharge');
const infoSchema = require('../../models/Info');

// 获取钱包信息
wallet.get('/:id', async (req, res) => {
  const { id } = req.params;
  let result = null;
  if (id === 'undefined') {
    result = await walletSchema.find().populate('user', { phone: 1 });
  } else {
    result = await walletSchema
      .find({ user: id })
      .populate('user', { phone: 1 });
  }
  res.send(result);
});

wallet.post('/', async (req, res) => {
  const { _id, money = 0 } = req.body;
  const result = await walletSchema
    .findByIdAndUpdate(_id, { $inc: { blance: money } }, { new: true })
    .populate('user', { phone: 1 });
  // 添加财务数据
  const financeInfo = await financeSchema.create({
    user: result.user,
    amount: money,
    blance: result.blance,
    description: `${req.user.name}-后台充值`,
    status: 1,
  });
  // 添加充值记录
  const rechargeInfo = await rechargeSchema.create({
    user: result.user,
    payType: { text: '后台手动充值', value: req.user.name },
    amount: money,
    oriAmount: money,
    note: `${req.user.name}-后台充值`,
    status: 1,
    finance: financeInfo._id,
  });

  // 添加统计信息
  // 获取当前时间戳
  const currentDay = new Date(new Date().setHours(0, 0, 0, 0)) / 1000;
  const rechargeStats = await infoSchema.findOne({
    date: currentDay,
    type: 'recharge',
  });
  if (rechargeStats) {
    await infoSchema.findByIdAndUpdate(rechargeStats._id, {
      $inc: { value: rechargeInfo.oriAmount },
    });
  } else {
    await infoSchema.create({
      type: 'recharge',
      value: rechargeInfo.oriAmount,
      date: currentDay,
    });
  }
  res.send(result);
});

module.exports = wallet;
