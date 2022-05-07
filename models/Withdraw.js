const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    user: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
    amount: { type: Number },
    fees: { type: Number },
    blance: { type: Number },
    bankInfo: {
      name: { type: String, trim: true },
      bank: {
        code: String,
        value: String,
      },
      bankAccount: { type: String, trim: true },
    },
    status: { type: Number, default: 0 }, // 0 表示未处理提现， 1 表示已提现， 2 表示提现失败
		finance: {type: mongoose.SchemaTypes.ObjectId, ref: 'Finance'} // 关联财务明细
  },
  {
		timestamps: true,
    versionKey: false,
  }
);
module.exports = mongoose.model('Withdraw', schema);
