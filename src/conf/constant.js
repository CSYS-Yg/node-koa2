/*
 * @LastEditors  : Yx
 * @LastEditTime : 2022-12-06 20:16:55
 * @Description  : 系统所有常量
 * @Author       : Yx
 * @Date         : 2022-12-06 20:15:40
 * @FilePath     : \node-koa2\src\conf\constant.js
 */

module.exports = {
  DEFAULT_PICTURE: 'https://dwz.cn/rnTnftZs',
  PAGE_SIZE: 5,

  // 正则表达式，匹配 '@昵称 - userName'
  REG_FOR_AT_WHO: /@(.+?)\s-\s(\w+?)\b/g,
}
