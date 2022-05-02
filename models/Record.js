// 财务明细
const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    user: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' }, // 用户
    amount: { type: Number }, // 资金变动金额
    blance: { type: Number }, // 变动后的余额
    description: { type: String }, // 变动说明
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = mongoose.model('Record', schema);
