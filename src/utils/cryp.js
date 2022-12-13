/*
 * @LastEditors  : Yx
 * @LastEditTime : 2022-12-13 20:21:49
 * @Description  : 加密方法
 * @Author       : Yx
 * @Date         : 2022-12-13 20:12:53
 * @FilePath     : \node-koa2\src\utils\cryp.js
 */
const { CRYPTO_SECRET_KEY } = require('../conf/secretKeys')

const crypto = require('crypto')

/**
 * _md5 加密
 * @param { string } content 明文
 */
function _md5(content) {
  const md5 = crypto.createHash('md5')
  return md5.update(content).digest('hex')
}

/**
 * 加密方法
 * @param { string } content 明文
 */
function doCrypto(content) {
  const str = `password${content}&key=${CRYPTO_SECRET_KEY}`
  return _md5(str)
}

module.exports = doCrypto
