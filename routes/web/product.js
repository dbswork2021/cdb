const productRoutes = require('express').Router();
const assert = require('http-assert');
const productSchema = require('../../models/Product');
const userSchema = require('../../models/User');
const walletSchema = require('../../models/Wallet')
const financeSchema = require('../../models/Finance');
const transactionSchema = require('../../models/Transaction');
const infoSchema = require('../../models/Info')

productRoutes.get('/depot', async (req, res) => {
	// 获取用户已购买产品
  const result = await transactionSchema
    .find({ user: req.user.id, state: { $gt: 0 } })
    .populate('product');

  const resRes = result.map((order) => {
		// 一小时算一次可结算，计算当前离购买时过了几小时
    const time = parseInt(
      (Date.parse(new Date()) / 1000 - Date.parse(order.createdAt) / 1000) /
        60 /
        60
    );
		// 判断产品周期是否结束
    if (order.product.period - time <= 0) {
			// 周期已结束
			// 判断已领次数是否和周期数一样
      if (order.done !== order.product.period) {
				// 不一样则返回，让客户领取
        return {
					_id: order._id,
					product: order.product,
					user: order.user,
          done: order.product.period,
					reveive: order.reveive,
					income: order.income,
					price: order.price,
					state: order.state,
					createdAt: order.createdAt,
					updatedAt: order.updatedAt
        };
      }
    } else {
			// 周期未结束
			// 如果已领次数等于已过时间，则表示当前没有可领的，否则可领取
      if (order.done !== time) {
        return {
					_id: order._id,
					product: order.product,
					user: order.user,
          done: time,
					reveive: order.reveive,
					income: order.income,
					price: order.price,
					state: order.state,
					createdAt: order.createdAt,
					updatedAt: order.updatedAt
        };
      }
    }
    return order;
  });
	
  res.send(resRes);
});

productRoutes.post('/depot', async (req, res) => {
	// 可领取次数，总的可领取次数减去已领取次数
  const count = req.body.done - req.body.reveive;
	// 可领收益，可领取次数乘以单次收益
  const income = count * req.body.income;
	// 更新产品数据
  if (req.body.done === req.body.product.period) {
		// 周期结束，将状态改为 0
    await transactionSchema.findByIdAndUpdate(req.body._id, {
      done: req.body.done,
      state: 0,
			$inc:{
      reveive: count,
			}
    });
  } else {
		// 周期未结束，仅领取收益，不更改状态
    await transactionSchema.findByIdAndUpdate(req.body._id, {
      done: req.body.done,
			$inc: {
      reveive: count,
			}
    });
  }
	// 更新钱包数据
	const walletInfo = await walletSchema.findOneAndUpdate({user: req.user.id}, {$inc: {blance: income, income: income}}, {new: true})
	// 添加财务明细
	await financeSchema.create({user: walletInfo.user, amount: income, blance: walletInfo.blance, description: `领取${req.body.product.name}收益`})
		// 添加统计信息
		// 获取当前时间戳
		const currentDay = new Date(new Date().setHours(0, 0, 0, 0)) / 1000;
		const incomeStats = await infoSchema.findOne({date: currentDay, type: 'income'})
		if(incomeStats){
			await infoSchema.findByIdAndUpdate(incomeStats._id, {$inc: {value: income}})
		}else{
			await infoSchema.create({type: 'income', value: income, date: currentDay})
		}
	res.send({message: "领取成功"})
});

productRoutes.post('/buy', async (req, res) => {
  const walletInfo = await walletSchema.findOne({user: req.user.id});
  assert(
    walletInfo.blance >= req.body.price,
    400,
    res.__('blance_not_enough')
  );
  await productSchema.findOneAndUpdate(req.body._id, { $inc: { stock: -1 } }); // 库存减一
  const newWalletInfo = await walletSchema.findByIdAndUpdate(
    walletInfo._id,
    { $inc: { blance: -req.body.price } },
    { new: true }
  ); // 扣除余额
  await financeSchema.create({
    user: newWalletInfo.user,
    amount: -req.body.price,
    blance: newWalletInfo.blance,
    description: '购买' + req.body.name,
  }); // 财务明细
  await transactionSchema.create({
    user: newWalletInfo.user,
    product: req.body._id,
    income: req.body.income,
    price: req.body.price,
  }); // 交易记录
  res.send({ message: res.__('triding_done') });
});

module.exports = productRoutes;
