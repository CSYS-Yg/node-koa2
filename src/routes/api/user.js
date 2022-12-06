/*
 * @LastEditors  : Yx
 * @LastEditTime : 2022-12-06 20:52:37
 * @Description  : user API 路由
 * @Author       : Yx
 * @Date         : 2022-11-27 13:21:54
 * @FilePath     : \node-koa2\src\routes\api\user.js
 */

const { isExist } = require('../../controller/user')

const router = require('koa-router')()

// 当前页面 api 路由 访问前缀
router.prefix('/api/user')

// 注册路由
router.post('/register', async (ctx, next) => {})

// 用户名是否存在
router.post('/isExist', async (ctx, next) => {
  const { userName } = ctx.request.body
  ctx.body = await isExist(userName)
})

module.exports = router
