/*
 * @LastEditors  : Yx
 * @LastEditTime : 2022-12-16 15:50:14
 * @Description  : 用户页面 路由配置
 * @Author       : Yx
 * @Date         : 2022-11-03 09:09:02
 * @FilePath     : \node-koa2\src\routes\view\users.js
 */
const router = require('koa-router')()
const { loginRedirect } = require('../../middlewares/loginChecks')

/**
 * 获取登录信息
 * @param {Object} ctx ctx
 */
function getLoginInfo(ctx) {
  let data = {
    isLogin: false, // 默认未登录
  }

  const userInfo = ctx.session.userInfo
  if (userInfo) {
    data = {
      isLogin: true,
      userName: userInfo.userName,
    }
  }
  return data
}

router.get('/login', async (ctx, next) => {
  await ctx.render('login', getLoginInfo(ctx))
})

router.get('/register', async (ctx, next) => {
  await ctx.render('register', getLoginInfo(ctx))
})

router.get('/setting', loginRedirect, async (ctx, next) => {
  await ctx.render('setting', ctx.session.userInfo)
})

module.exports = router
