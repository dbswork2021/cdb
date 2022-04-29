const productRoutes = require('express').Router();
const productSchema = require('../../models/Product');

productRoutes.get('/', async (req, res) => {
  const result = await productSchema.find();
  res.send(result);
});

productRoutes.post('/', async (req, res) => {
	let result = null
	
  if (req.body.id) {
    result = await productSchema.findByIdAndUpdate(req.body.id, req.body, {new: true});
  } else {
    result = await productSchema.create(req.body);
  }
  res.send(result);
});

productRoutes.delete('/:id', async (req, res) => {
	
 const test =  await productSchema.findByIdAndDelete(req.params.id);
  res.send({ message: '删除成功' });
});

module.exports = productRoutes;
