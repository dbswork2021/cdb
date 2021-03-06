const utils = require('express').Router();

const multer = require('multer');
const upload = multer({ dest: 'public/uploads/' });

const svgCaptcha = require('svg-captcha');

const jwt = require('jsonwebtoken');
const { SECRET } = require('../../config');
const auth = require('../../utils/auth');

const setSchema = require('../../models/Set');
const rechargeSchema = require('../../models/Recharge');
const withdrawSchema = require('../../models/Withdraw');
const financeSchema = require('../../models/Finance');
const walletSchema = require('../../models/Wallet');
const userSchema = require('../../models/User');
const infoSchema = require('../../models/Info')

const md5 = require('md5');
const axios = require('axios');
const assert = require('http-assert');

utils.get('/captcha', (req, res) => {
  var captcha = svgCaptcha.create();
  const token = jwt.sign({ code: captcha.text }, SECRET, { expiresIn: '1d' });
  res.status(200).send({ svg: captcha.data, token });
});

utils.post('/sms', async (req, res) => {
  const currentTime = new Date();
  const year = currentTime.getFullYear().toString();
  const month =
    currentTime.getMonth() < 10
      ? '0' + (currentTime.getMonth() + 1).toString()
      : currentTime.getMonth() + 1;
  const day =
    currentTime.getDay() < 10
      ? '0' + (currentTime.getDay() + 1).toString()
      : currentTime.getDay().toString() + 1;
  const hours =
    currentTime.getHours() < 10
      ? '0' + currentTime.getHours().toString()
      : currentTime.getHours().toString();
  const minutes =
    currentTime.getMinutes() < 10
      ? '0' + currentTime.getMinutes().toString()
      : currentTime.getMinutes().toString();
  const seconds =
    currentTime.getSeconds() < 10
      ? '0' + currentTime.getSeconds().toString()
      : currentTime.getSeconds().toString();
  const timestamp = year + month + day + hours + minutes + seconds;

  const smsSet = await setSchema.findOne({ type: 'sms' });
  const signStr =
    smsSet.sets.get('appKey') + timestamp + smsSet.sets.get('secretKey');
  const sign = md5(signStr);
  assert(req.body.phone.length === 10, 422, '?????????????????????');
  const mobile = req.body.phone.replace('0', '66');
  var captcha = svgCaptcha.create().text;
  const token = jwt.sign({ code: captcha }, SECRET, { expiresIn: '300s' });

  const result = await axios.post(smsSet.sets.get('smsApiUrl'), {
    apikey: smsSet.sets.get('appKey'),
    timestamp,
    sign,
    mobile,
    content: smsSet.sets.get('title') + captcha + smsSet.sets.get('content'),
  });

  if (result.data.status === '000') {
    res.send({ message: '?????????????????????????????????', token });
  } else {
    assert(false, 422, '?????????????????????????????????????????????????????????');
  }
});

utils.post('/uploads', auth, upload.single('file'), async (req, res) => {
  res.send(req.file.filename);
});

utils.post('/notify', async (req, res) => {
  if (req.body.tradeResult === '1') {
    // ??????????????????
    const rechargeInfo = await rechargeSchema.findById(req.body.mchOrderNo);
    if (rechargeInfo.status === 0) {
      // ????????????????????????
      await rechargeSchema.findByIdAndUpdate(
        rechargeInfo._id,
        { oriAmount: req.body.amount, status: 1 },
        { new: true }
      );
      // ????????????
      const walletInfo = await wall.findOneAndUpdate(
        { user: rechargeInfo.user },
        {
          $inc: { blance: rechargeInfo.oriAmount },
        },
        { new: true }
      );
      // ??????????????????
      await financeSchema.findByIdAndUpdate(rechargeInfo.finance, {
        amount: rechargeInfo.oriAmount,
        blance: walletInfo.blance,
        status: 1,
      });
      // ??????????????????
      // ?????????????????????
      const currentDay = new Date(new Date().setHours(0, 0, 0, 0)) / 1000;
      const rechargeStats = await infoSchema.findOne({
        date: currentDay,
        type: 'recharge',
      });
      if (rechargeStats) {
        await infoSchema.findByIdAndUpdate(rechargeStats._id, {
          $inc: { value: rechargeInfo.oriAmount },
        });
      } else {
        await infoSchema.create({
          type: 'recharge',
          value: rechargeInfo.oriAmount,
          date: currentDay,
        });
      }
    }
  }
  res.send('success');
});

utils.post('/back', async (req, res) => {
  if (req.body.tradeResult === '1') {
    // ????????????????????????
    const withdrawInfo = await withdrawSchema.findByIdAndUpdate(
      req.body.merTransferId,
      { status: 1 },
      { new: true }
    );
    // ??????????????????
    await financeSchema.findByIdAndUpdate(withdrawInfo.finance, {
      status: 1,
    });
    // ??????????????????
    // ?????????????????????
    const currentDay = new Date(new Date().setHours(0, 0, 0, 0)) / 1000;
    const withdrawStats = await infoSchema.findOne({
      date: currentDay,
      type: 'withdraw',
    });
    if (withdrawStats) {
      await infoSchema.findByIdAndUpdate(withdrawStats._id, {
        $inc: { value: req.body.transferAmount },
      });
    } else {
      await infoSchema.create({ type: 'withdraw', value: req.body.transferAmount, date: currentDay });
    }
  }
  res.send('success');
});

module.exports = utils;
