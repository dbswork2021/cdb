const setRoutes = require('express').Router();
const setSchema = require('../../models/Set')

setRoutes.get('/:type', async (req, res) => {
  const result = await setSchema.findOne({type: req.params.type});
  res.send(result);
});

setRoutes.post('/', async (req, res) => {
	
	if(req.body._id){
		await setSchema.findByIdAndUpdate(req.body._id, req.body)
	}else{
		await setSchema.create(req.body)
	}

	res.send({message: '保存成功'})
})


module.exports = setRoutes;


