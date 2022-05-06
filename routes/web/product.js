const productRoutes = require('express').Router();
const assert = require('http-assert');
const productSchema = require('../../models/Product');
const userSchema = require('../../models/User');
const recordSchema = require('../../models/Record');
const tridingSchema = require('../../models/Triding');

productRoutes.get('/depot', async (req, res) => {
  const result = await tridingSchema
    .find({ user: req.user.id, state: { $gt: 0 } })
    .populate('product');

  const resRes = result.map((order) => {
    const time = parseInt(
      (Date.parse(new Date()) / 1000 - Date.parse(order.createdAt) / 1000) /
        60 /
        60
    );
    if (order.product.period - time <= 0) {
      if (order.done !== order.product.period) {
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
  const count = req.body.done - req.body.reveive;
  const income = count * req.body.income;
  if (req.body.done === req.body.product.period) {
    await tridingSchema.findByIdAndUpdate(req.body._id, {
      done: req.body.done,
      reveive: count,
      state: 0,
    });
  } else {
    await tridingSchema.findByIdAndUpdate(req.body._id, {
      done: req.body.done,
      reveive: count,
    });
  }
	const currentUser = await userSchema.findByIdAndUpdate(req.user.id, {$inc: {blance: income, income: income}}, {new: true})
	await recordSchema.create({user: currentUser.id, amount: income, blance: currentUser.blance, description: `领取${req.body.product.name}收益`})
	res.send({message: "领取成功"})
});

productRoutes.post('/buy', async (req, res) => {
  const currentUser = await userSchema.findById(req.user.id);
  assert(
    currentUser.blance >= req.body.price,
    400,
    res.__('blance_not_enough')
  );
  await productSchema.findOneAndUpdate(req.body._id, { $inc: { stock: -1 } }); // 库存减一
  const newUserInfo = await userSchema.findByIdAndUpdate(
    currentUser._id,
    { $inc: { blance: -req.body.price } },
    { new: true }
  ); // 扣除余额
  await recordSchema.create({
    user: newUserInfo._id,
    amount: -req.body.price,
    blance: newUserInfo.blance,
    description: '购买' + req.body.name,
  }); // 财务明细
  await tridingSchema.create({
    user: newUserInfo._id,
    product: req.body._id,
    income: req.body.income,
    price: req.body.price,
  }); // 交易记录
  res.send({ message: res.__('triding_done') });
});

module.exports = productRoutes;
