const post = require('express').Router()
const postSchema = require('../../models/Post');

post.get('/', async (req, res) => {
  const result = await postSchema.find();
  res.send(result);
});

post.post('/', async (req, res) => {
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

post.delete('/:id', async (req, res) => {
  const test = await postSchema.findByIdAndDelete(req.params.id);
  res.send({ message: '删除成功' });
});

module.exports = post
