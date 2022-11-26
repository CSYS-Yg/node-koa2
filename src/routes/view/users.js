/*
 * @LastEditors  : Yx
 * @LastEditTime : 2022-11-26 15:02:41
 * @Description  : 用户页面 路由配置
 * @Author       : Yx
 * @Date         : 2022-11-03 09:09:02
 * @FilePath     : \node-koa2\src\routes\view\users.js
 */
const router = require('koa-router')()

router.get('/login', async (ctx, next) => {
  await ctx.render('login', {})
})

router.get('/register', async (ctx, next) => {
  await ctx.render('register', {})
})

module.exports = router
