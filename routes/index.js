import Wechat from 'node-wechat-sign'

const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  let url = req.query.url
  let signature = getSignature(url)
  res.send('Hey! It works!', { wxConf: signature });
});


function getSignature() {
  let appid = "todo"
  let secret = "todo"
  const config = config = {
    appid,
    secret,
    tokenApiTemplate: "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=#{appid}&secret=#{secret}",
    ticketApiTemplate: "https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=#{access_token}&type=jsapi",
    cacheExpiresInSeconds: 7000
  }

  const wechat = new Wechat(config)
  const signature = await wechat.sign(url)
  return signature
}

module.exports = router;
