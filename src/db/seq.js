/*
 * @LastEditors  : Yx
 * @LastEditTime : 2022-11-27 02:40:03
 * @Description  : sequelize 实例
 * @Author       : Yx
 * @Date         : 2022-11-03 09:09:02
 * @FilePath     : \node-koa2\src\db\seq.js
 */
const Sequelize = require('sequelize')
const { isProd, isTest } = require('../utils/env')
const { MYSQL_CONF } = require('../conf/db')
const { host, user, password, database } = MYSQL_CONF

const conf = {
  host,
  dialect: 'mysql', // 声明链接的数据库类型
}

if (isTest) {
  // 是否打印 sql 语句输出日志
  conf.logging = () => {}
}

if (isProd) {
  // 线上环境，使用链接池
  conf.pool = {
    max: 5, // 连接池中最大的连接数量
    min: 0, // 连接池中最小的连接数量
    idle: 10000, // 如果一个连接池 10 秒内未被使用，则释放
  }
}
const seq = new Sequelize(database, user, password, conf)

// 生产环境 连接池

module.exports = seq
