/*
 * @LastEditors  : Yx
 * @LastEditTime : 2022-12-15 10:50:43
 * @Description  : user API 路由。做好接收参数，解析参数，返回参数。业务实现交给控制器
 * @Author       : Yx
 * @Date         : 2022-11-27 13:21:54
 * @FilePath     : \node-koa2\src\routes\api\user.js
 */

const { isExist, register, login, deleteCurUser } = require('../../controller/user')
const userValidate = require('../../validator/user')
const { genValidator } = require('../../middlewares/validator')
const { loginCheck } = require('../../middlewares/loginChecks')
const { isTest } = require('../../utils/env')

const router = require('koa-router')()

// 当前页面 api 路由 访问前缀
router.prefix('/api/user')

// 注册路由
router.post('/register', genValidator(userValidate), async (ctx, next) => {
  const { userName, password, gender } = ctx.request.body
  ctx.body = await register({ userName, password, gender })
})

// 用户名是否存在
router.post('/isExist', async (ctx, next) => {
  const { userName } = ctx.request.body
  ctx.body = await isExist(userName)
})

// 登录路由
router.post('/login', async (ctx, next) => {
  const { userName, password } = ctx.request.body
  ctx.body = await login(ctx, userName, password)
})

// 删除
router.post('/delete', loginCheck, async (ctx, next) => {
  if (isTest) {
    // 测试环境下，测试账号登录之后，删除自己
    const { userName } = ctx.session.userInfo
    ctx.body = await deleteCurUser(userName)
  }
})

module.exports = router
