const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    user: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' }, // 用户
    payType: { text: String, value: String }, // 支付类型
    amount: { type: Number }, // 充值金额
    oriAmount: { type: Number, default: 0 }, // 实际支付金额
    note: { type: String }, // 充值说明
    status: { type: Number, default: 0 }, // 充值状态 默认 0 表示未付款  1 表示已付款
		finance: {type: mongoose.SchemaTypes.ObjectId, ref: 'Finance'}
  },
  {
		timestamps: true,
    versionKey: false,
  }
);
module.exports = mongoose.model('Recharge', schema);
