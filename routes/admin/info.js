const infoRoutes = require('express').Router();
const rotateSchema = require('../../models/Rotate');
const postSchema = require('../../models/Post');
const aboutSchema = require('../../models/About');
const centerSchema = require('../../models/Center');
const shareSchema = require('../../models/Share');

infoRoutes.get('/dashboard', async (req, res) => {
  res.send('dashboard');
});

infoRoutes.get('/rotate', async (req, res) => {
  const result = await rotateSchema.find();
  res.send(result);
});

infoRoutes.post('/rotate', async (req, res) => {
  const result = await rotateSchema.create({ imgUrl: req.body.imageUrl });
  res.send(result);
});

infoRoutes.delete('/rotate/:id', async (req, res) => {
  await rotateSchema.findByIdAndDelete(req.params.id);
  res.send({ message: '删除成功' });
});

infoRoutes.get('/post', async (req, res) => {
  const result = await postSchema.find();
  res.send(result);
});

infoRoutes.post('/post', async (req, res) => {
  let result = null;

  if (req.body.id) {
    result = await postSchema.findByIdAndUpdate(req.body.id, req.body, {
      new: true,
    });
  } else {
    result = await postSchema.create(req.body);
  }
  res.send(result);
});

infoRoutes.delete('/post/:id', async (req, res) => {
  const test = await postSchema.findByIdAndDelete(req.params.id);
  res.send({ message: '删除成功' });
});

infoRoutes.get('/about', async (req, res) => {
  const result = await aboutSchema.findOne();
  res.send(result);
});

infoRoutes.post('/about', async (req, res) => {
  const dbResule = await aboutSchema.findOne();
  let result = null;
  if (dbResule) {
    result = await aboutSchema.findOneAndUpdate(req.body.id, req.body, {
      new: true,
    });
  } else {
    result = await aboutSchema.create(req.body);
  }
  res.send(result);
});

infoRoutes.get('/center', async (req, res) => {
  const result = await centerSchema.findOne();
  res.send(result);
});

infoRoutes.post('/center', async (req, res) => {
  const oldResult = await centerSchema.find();
  let result = null;
  if (oldResult.length === 0) {
    result = await centerSchema.create(req.body);
  } else {
    result = await centerSchema.findOneAndUpdate({}, req.body);
  }
  res.send({ message: '保存成功' });
});

infoRoutes.get('/share', async (req, res) => {
  const result = await shareSchema.findOne();
  res.send(result);
});

infoRoutes.post('/share', async (req, res) => {
  const oldResult = await shareSchema.find();
  let result = null;
  if (oldResult.length === 0) {
    result = await shareSchema.create(req.body);
  } else {
    result = await shareSchema.findOneAndUpdate({}, req.body);
  }
  res.send({ message: '保存成功' });
});

module.exports = infoRoutes;
