/*
 * @LastEditors  : Yx
 * @LastEditTime : 2022-11-04 09:13:10
 * @Description  : 环境变量
 * @Author       : Yx
 * @Date         : 2022-11-03 09:09:02
 * @FilePath     : \node-koa2\src\utils\env.js
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
