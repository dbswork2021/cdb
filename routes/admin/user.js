const userRoutes = require('express').Router();
const userSchema = require('../../models/User');
const walletSchema = require('../../models/Wallet')
const bankSchema = require('../../models/Bank')
const adminSchema = require('../../models/Admin')

// 获取用户信息
userRoutes.get('/', async (req, res) => {
  const userInfo = await userSchema.find().populate('referrer', {phone: 1});
  res.send(userInfo);
});

userRoutes.delete('/:id', async (req, res) => {
	const operateUser = await userSchema.findById(req.params.id)
	if(operateUser.state === 1){
		await userSchema.findOneAndUpdate(req.params.id, {state: 0})
	}else{
		await userSchema.findOneAndUpdate(req.params.id, {state: 1})
	}
	res.send({message: '操作成功'})
});

userRoutes.post('/user', async (req, res) => {
	const {id, blance, money = 0} = req.body
	const userInfo = await userSchema.findById(id)
	await walletSchema.findByIdAndUpdate(userInfo.wallet, {$inc: {blance: money}})
	const result = await userSchema.findByIdAndUpdate(id, {
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

userRoutes.get('/bank', async (req, res) => {
	const result = await bankSchema.find().populate('user', {nick: 1})
	res.send(result)
})

module.exports = userRoutes;
