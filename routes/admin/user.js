const userRoutes = require('express').Router();
const userSchema = require('../../models/User');

userRoutes.get('/list', async (req, res) => {
  const allUser = await userSchema.find().populate('referrer', {phone: 1});
  res.send(allUser);
});

userRoutes.get('/:id', async (req, res) => {
	const operateUser = await userSchema.findById(req.params.id)
	if(operateUser.state === 1){
		await userSchema.findOneAndUpdate(req.params.id, {state: 0})
	}else{
		await userSchema.findOneAndUpdate(req.params.id, {state: 1})
	}
	res.send({message: '操作成功'})
});

userRoutes.delete('/:id', async (req, res) => {
  console.log(req.params.id);
	await userSchema.findOneAndDelete(req.params.id)
	res.send({message: '删除成功'})
});

userRoutes.post('/', async (req, res) => {
  console.log(req.body);
});

userRoutes.put('/', async (req, res) => {
  console.log(req.body);
});

module.exports = userRoutes;
