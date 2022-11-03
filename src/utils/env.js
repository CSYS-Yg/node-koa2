/**
 * @format
 * @LastEditors: Yx
 * @LastEditTime: 2022-11-01 23:31:01
 * @Description:环境变量
 * @Author: Yx
 * @Date: 2022-10-25 22:25:35
 * @FilePath: \node-koa2\src\utils\env.js
 */

const ENV = process.env.NODE_ENV

module.exports = {
  isDev: ENV === 'dev',
  notDev: ENV !== 'dev',
  isProd: ENV === 'production',
  notProd: ENV !== 'production',
  isTest: ENV === 'test',
  notTest: ENV !== 'test',
}
