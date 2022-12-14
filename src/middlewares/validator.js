/*
 * @LastEditors  : Yx
 * @LastEditTime : 2022-12-14 10:46:57
 * @Description  : json schema 验证中间件
 * @Author       : Yx
 * @Date         : 2022-12-14 09:49:57
 * @FilePath     : \node-koa2\src\middlewares\validator.js
 */

const { ErrorModel } = require('../model/ResModel')
const { jsonSchemaFileInfo } = require('../model/ErrorInfo')

function genValidator(validateFn) {
  async function validator(ctx, next) {
    const data = ctx.request.body
    const error = validateFn(data)
    if (error) {
      // 验证失败
      ctx.body = new ErrorModel(jsonSchemaFileInfo)
      return
    }
    // 验证成功，继续
    await next()
  }
  // 返回中间件
  return validator
}

module.exports = {
  genValidator,
}
