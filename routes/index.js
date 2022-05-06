const static = require('express').static
const commonRoutes = require('./common');
const webRoutes = require('./web');
const adminRoutes = require('./admin');

module.exports = (app) => {
	app.use('/', static(__dirname + '/../public/web'))
	app.use('/admin', static(__dirname + '/../public/admin'))
	app.use('/uploads', static(__dirname + '/../public/uploads'))
  app.use('/api/web', webRoutes);
  app.use('/api/admin', adminRoutes);
  app.use('/api/common', commonRoutes);

  /* app.use(async (err, req, res, next) => {
    res.status(err.statusCode).send({
      message: err.message,
    });
  }); */
};
