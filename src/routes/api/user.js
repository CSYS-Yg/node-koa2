/*
 * @LastEditors  : Yx
 * @LastEditTime : 2022-12-13 20:02:34
 * @Description  : user API 路由。做好接收参数，解析参数，返回参数。业务实现交给控制器
 * @Author       : Yx
 * @Date         : 2022-11-27 13:21:54
 * @FilePath     : \node-koa2\src\routes\api\user.js
 */

const { isExist, register } = require('../../controller/user')

const router = require('koa-router')()

// 当前页面 api 路由 访问前缀
router.prefix('/api/user')

// 注册路由
router.post('/register', async (ctx, next) => {
  const { userName, password, gender } = ctx.request.body
  ctx.body = await register({ userName, password, gender })
})

// 用户名是否存在
router.post('/isExist', async (ctx, next) => {
  const { userName } = ctx.request.body
  ctx.body = await isExist(userName)
})

module.exports = router
