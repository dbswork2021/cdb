const product = require('express').Router();
const productSchema = require('../../models/Product');

product.get('/', async (req, res) => {
  const result = await productSchema.find();
  res.send(result);
});

product.post('/', async (req, res) => {
	let result = null
	
  if (req.body.id) {
    result = await productSchema.findByIdAndUpdate(req.body.id, req.body, {new: true});
  } else {
    result = await productSchema.create(req.body);
  }
  res.send(result);
});

product.delete('/:id', async (req, res) => {
	
 await productSchema.findByIdAndDelete(req.params.id);
  res.send({ message: '删除成功' });
});



module.exports = product;
