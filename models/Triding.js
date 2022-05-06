// 交易记录
const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    product: { type: mongoose.SchemaTypes.ObjectId, ref: 'Product' }, // 产品编号
    user: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' }, // 用户编号
    done: { type: Number, default: 0 }, // 可领取的收益次数
		reveive: {type: Number, default: 0},
    income: { type: Number }, // 每小时的收益
    price: { type: Number }, // 购买价格
    state: { type: Number, default: 1 }, // 状态, 0 表示结束，大于 0 的数  表示此交易未结束，和第几周期
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = mongoose.model('Triding', schema);
