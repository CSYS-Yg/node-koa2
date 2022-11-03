/**
 * @format
 * @LastEditors: Yx
 * @LastEditTime: 2022-11-03 00:21:56
 * @Description:redis连接配置
 * @Author: Yx
 * @Date: 2022-10-25 22:20:16
 * @FilePath: \node-koa2\src\cache\_redis.js
 */

const redis = require('redis')
const { REDIS_CONF } = require('../conf/db')

// 创建客户端
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)
redisClient.on('error', (err) => {
  console.log('redisClient ~ err', err)
})

/**
 * @param {string} key key 键
 * @param {string} val val 值
 * @param {number} timeout 过去时间,单位 s
 */
function set(key, val, timeout = 60 * 60) {
  if (typeof val === 'object') {
    val = JSON.stringify(val)
  }
  redisClient.set(key, val)
  redisClient.expire(key, timeout)
}

/**
 *
 * @param {string} key 键
 */
function get(key) {
  const promis = new Promise((resolve, reject) => [
    redisClient.get(key, (err, val) => {
      if (err) {
        reject(err)
        return
      }
      if (val == null) {
        resolve(null)
        return
      }
      try {
        resolve(JSON.parse(val))
      } catch (ex) {
        resolve(val)
      }
    }),
  ])
  return promis
}

module.exports = {
  set,
  get,
}
