const info = require('express').Router();
const infoSchema = require('../../models/Info');

info.get('/dashboard', async (req, res) => {
  const currentDay = new Date(new Date().setHours(0, 0, 0, 0)) / 1000;

  const regInfo = await infoSchema.find({ type: 'reg' });
  const incomeInfo = await infoSchema.find({ type: 'income' });
  const rechargeInfo = await infoSchema.find({ type: 'recharge' });
  const withdrawInfo = await infoSchema.find({ type: 'withdraw' });

	const currentDayReg = await infoSchema.findOne({date: currentDay, type: 'reg'})
	const currentDayIncome = await infoSchema.findOne({date: currentDay, type: 'income'})
	const currentDayRecharge = await infoSchema.findOne({date: currentDay, type: 'recharge'})
	const currentDayWithdraw = await infoSchema.findOne({date: currentDay, type: 'withdraw'})

	const regSum = regInfo.reduce((sum, e) => sum + Number(e.value || 0), 0)
	const incomeSum = incomeInfo.reduce((sum, e) => sum + Number(e.value || 0), 0)
	const rechargeSum = rechargeInfo.reduce((sum, e) => sum + Number(e.value || 0), 0)
	const withdrawSum = withdrawInfo.reduce((sum, e) => sum + Number(e.value || 0), 0)
	
  res.send({
		dayReg: currentDayReg ? currentDayReg.value : 0,
		dayIncome: currentDayIncome ? currentDayIncome.value : 0,
		dayRecharge: currentDayRecharge ? currentDayRecharge.value : 0,
		dayWithdraw: currentDayWithdraw ? currentDayWithdraw.value : 0,
		regSum,
		incomeSum,
		rechargeSum,
		withdrawSum
	});
});

module.exports = info;
