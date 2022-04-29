const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    username: { type: String, trim: true, unique: true },
    passwd: {
      type: String,
      trim: true,
      select: false,
      set: (val) => {
       return require('bcryptjs').hashSync(val, 10);
      },
    },
  },
  {
    versionKey: false,
  }
);
module.exports = mongoose.model('Admin', schema);
