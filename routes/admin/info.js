const infoRoutes = require('express').Router()
const rotateSchema = require('../../models/Rotate')
const postSchema = require('../../models/Post')
const aboutSchema = require('../../models/About')

infoRoutes.get('/dashboard', async (req, res) => {
	res.send('dashboard')
})

infoRoutes.get('/rotate', async (req, res) => {
	const result = await rotateSchema.find()
	res.send(result)
})

infoRoutes.post('/rotate', async (req, res) => {
	const result = await rotateSchema.create({imgUrl: req.body.imageUrl})
	res.send(result)
})

infoRoutes.delete('/rotate/:id', async(req,res) => {
	await rotateSchema.findByIdAndDelete(req.params.id)
	res.send({message: '删除成功'})
	
})


infoRoutes.get('/post', async (req, res) => {
  const result = await postSchema.find();
  res.send(result);
});

infoRoutes.post('/post', async (req, res) => {
	let result = null
	
  if (req.body.id) {
    result = await postSchema.findByIdAndUpdate(req.body.id, req.body, {new: true});
  } else {
    result = await postSchema.create(req.body);
  }
  res.send(result);
});

infoRoutes.delete('/post/:id', async (req, res) => {
	
 const test =  await postSchema.findByIdAndDelete(req.params.id);
  res.send({ message: '删除成功' });
});


infoRoutes.get('/about', async (req, res) => {
  const result = await aboutSchema.findOne();
  res.send(result);
});

infoRoutes.post('/about', async (req, res) => {
	const dbResule = await aboutSchema.findOne()
	let result = null
  if (dbResule) {
    result = await aboutSchema.findOneAndUpdate(req.body.id, req.body, {new: true});
  } else {
    result = await aboutSchema.create(req.body);
  }
  res.send(result);
});

module.exports = infoRoutes
