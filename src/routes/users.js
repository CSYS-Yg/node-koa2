/**
 * @LastEditors: Yx
 * @LastEditTime: 2022-10-11 22:41:19
 * @Description:
 * @Author: Yx
 * @Date: 2022-10-11 21:58:06
 * @FilePath: \node-koa2\src\routes\users.js
 */

const router = require('koa-router')()

// 访问前缀
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

// 模拟 post 登录
router.post('/login', async function (ctx, next) {
  const { userName, passWord } = ctx.request.body
  ctx.body = {
    userName,
    passWord,
  }
})

module.exports = router
