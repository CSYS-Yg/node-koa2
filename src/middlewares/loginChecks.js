/*
 * @LastEditors  : Yx
 * @LastEditTime : 2022-12-15 10:51:57
 * @Description  : 登录验证的中间件
 * @Author       : Yx
 * @Date         : 2022-12-14 14:25:43
 * @FilePath     : \node-koa2\src\middlewares\loginChecks.js
 */
const { ErrorModel } = require('../model/ResModel')
const { loginCheckFailInfo } = require('../model/ErrorInfo')

/**
 * API 登录验证
 * @param {object} ctx ctx
 * @param {function} next next
 * @returns
 */
async function loginCheck(ctx, next) {
  if (ctx.session && ctx.session.userInfo) {
    // 已经登录
    await next()
    return
  }
  // 未登录
  ctx.body = new ErrorModel(loginCheckFailInfo)
}

/**
 * 检测未登录跳转的登录页面
 * @param {object} ctx ctx
 * @param {function} next
 * @returns
 */
async function loginRedirect(ctx, next) {
  if (ctx.session && ctx.session.userInfo) {
    // 已经登录
    await next()
    return
  }
  // 未登录
  const curUrl = ctx.url
  // 再那个页面访问，记录地址，跳转至登录带上
  // 登录成功后，前端跳转至指定页面
  ctx.redirect('/login?url=' + encodeURIComponent(curUrl))
}
module.exports = {
  loginCheck,
  loginRedirect,
}
