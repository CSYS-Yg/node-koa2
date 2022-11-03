/**
 * @LastEditors: Yx
 * @LastEditTime: 2022-11-01 23:15:32
 * @Description: 存储配置文件
 * @Author: Yx
 * @Date: 2022-10-25 22:17:39
 * @FilePath: \node-koa2\src\conf\db.js
 */

const { isProd } = require('../utils/env')

let REDIS_CONF = {
  port: 6379,
  host: '127.0.0.1',
}

let MYSQL_CONF = {
  host: 'localhost',
  user: 'root',
  password: 'yuguang',
  port: '3306',
  database: 'koa2_node_db',
}

// 线上环境配置
if (isProd) {
  REDIS_CONF = {
    // 线上的 redis 配置
    port: 6379,
    host: '127.0.0.1',
  }
  MYSQL_CONF = {
    // 线上的 mysql 配置
    host: 'localhost',
    user: 'root',
    password: 'yuguang',
    port: '3306',
    database: 'koa2_node_db',
  }
}
module.exports = {
  REDIS_CONF,
  MYSQL_CONF,
}
