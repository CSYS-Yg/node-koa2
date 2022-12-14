/*
 * @LastEditors  : Yx
 * @LastEditTime : 2022-12-14 09:36:47
 * @Description  : 微博 数据格式校验
 * @Author       : Yx
 * @Date         : 2022-12-14 09:36:37
 * @FilePath     : \node-koa2\src\validator\blog.js
 */

const validate = require('./_validate')

// 校验规则
const SCHEMA = {
  type: 'object',
  properties: {
    content: {
      type: 'string',
    },
    image: {
      type: 'string',
      maxLength: 255,
    },
  },
}

/**
 * 校验微博数据格式
 * @param {Object} data 微博数据
 */
function blogValidate(data = {}) {
  return validate(SCHEMA, data)
}

module.exports = blogValidate
