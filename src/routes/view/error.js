/*
 * @LastEditors  : Yx
 * @LastEditTime : 2022-11-05 10:20:06
 * @Description  : error 404 路由配置
 * @Author       : Yx
 * @Date         : 2022-11-04 17:20:25
 * @FilePath     : \node-koa2\src\routes\view\error.js
 */
const router = require('koa-router')()

router.get('/error', async (ctx, next) => {
  await ctx.render('error')
})

// 404，兜底路由
router.get('*', async (ctx, next) => {
  await ctx.render('404')
})

module.exports = router
