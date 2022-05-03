const userRoutes = require('express').Router();
const userSchema = require('../../models/User');
const adminSchema = require('../../models/Admin')

userRoutes.get('/list', async (req, res) => {
  const allUser = await userSchema.find().populate('referrer', {phone: 1});
  res.send(allUser);
});

userRoutes.get('/user/:id', async (req, res) => {
	const operateUser = await userSchema.findById(req.params.id)
	if(operateUser.state === 1){
		await userSchema.findOneAndUpdate(req.params.id, {state: 0})
	}else{
		await userSchema.findOneAndUpdate(req.params.id, {state: 1})
	}
	res.send({message: '操作成功'})
});

userRoutes.post('/user', async (req, res) => {
	const {id, nick, blance, money = 0} = req.body
	const result = await userSchema.findByIdAndUpdate(id, {
			nick,
			blance: blance + money
		},{new: true})

	res.send(result)
});

userRoutes.get('/admin', async (req, res) => {
  const result = await adminSchema.find();
  res.send(result);
});

userRoutes.post('/admin', async (req, res) => {
	let result = null
  if (req.body.id) {
    result = await adminSchema.findByIdAndUpdate(req.body.id, req.body, {new: true});
  } else {
    result = await adminSchema.create(req.body);
  }
  res.send(result);
});

userRoutes.delete('/admin/:id', async (req, res) => {
 await adminSchema.findByIdAndDelete(req.params.id);
  res.send({ message: '删除成功' });
});

module.exports = userRoutes;
