/*
 * @LastEditors  : Yx
 * @LastEditTime : 2022-12-14 09:35:24
 * @Description  : 未备注
 * @Author       : Yx
 * @Date         : 2022-12-14 09:27:23
 * @FilePath     : \node-koa2\src\validator\_validate.js
 */

const Ajv = require('ajv')
const ajv = new Ajv({
  //  allErrors: true // 输出所有的错误（比较慢）
})

/**
 * json schema 校验
 * @param {Object} schema json schema 规则
 * @param {Object} data 待校验的数据
 * @returns
 */
function validate(schema, data = {}) {
  const valid = ajv.validate(schema, data)
  if (!valid) {
    // 返回数组，只拿第一个错误
    return ajv.errors[0]
  }
}

module.exports = validate
