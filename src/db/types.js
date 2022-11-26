/*
 * @LastEditors  : Yx
 * @LastEditTime : 2022-11-26 16:07:40
 * @Description  : 封装 sequelize 数据类型
 * @Author       : Yx
 * @Date         : 2022-11-26 15:19:29
 * @FilePath     : \node-koa2\src\db\types.js
 */
const Sequelize = require('sequelize')

module.exports = {
  STRING: Sequelize.STRING,
  DECIMAL: Sequelize.DECIMAL, // 表示种类比较少的数据 比如性别 男 女 其他 等
  TEXT: Sequelize.TEXT,
  INTEGER: Sequelize.INTEGER,
  BOOLEAN: Sequelize.BOOLEAN,
}
