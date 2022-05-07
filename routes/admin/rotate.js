const rotate = require('express').Router()
const rotateSchema = require('../../models/Rotate');

rotate.get('/', async (req, res) => {
  const result = await rotateSchema.find();
  res.send(result);
});

rotate.post('/', async (req, res) => {
  const result = await rotateSchema.create({ imgUrl: req.body.imageUrl });
  res.send(result);
});

rotate.delete('/:id', async (req, res) => {
  await rotateSchema.findByIdAndDelete(req.params.id);
  res.send({ message: '删除成功' });
});
module.exports = rotate
