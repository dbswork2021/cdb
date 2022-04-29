
module.exports = () => {
const mongoose = require('mongoose');
const { PORT, HOST, NAME, USER, PWD } = require('../config').DB;
  const dbConnect = `mongodb://${USER}:${PWD}@${HOST}:${PORT}/${NAME}`;
  mongoose.connect(dbConnect, {});
};
