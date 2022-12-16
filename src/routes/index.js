/*
 * @LastEditors  : Yx
 * @LastEditTime : 2022-12-15 10:31:31
 * @Description  : 默认路由配置
 * @Author       : Yx
 * @Date         : 2022-11-04 09:08:56
 * @FilePath     : \node-koa2\src\routes\index.js
 */
const router = require('koa-router')()
const { loginRedirect } = require('../middlewares/loginChecks')
// const dayjs = require('dayjs')

router.get('/', loginRedirect, async (ctx, next) => {
  debugger
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    msg: '您好',
    isMe: true,
    blogList: [
      {
        id: 1,
        title: 'aaa',
      },
      {
        id: 2,
        title: 'bbb',
      },
      {
        id: 3,
        title: 'ccc',
      },
    ],
  })
})

router.get('/json', async (ctx, next) => {
  // throw Error() 抛出错误 进入路由页面
  const session = ctx.session
  if (session.viewNum == null) {
    session.viewNum = 0
  }
  session.viewNum++
  ctx.body = {
    title: 'koa2 json',
    // viewNum: session.viewNum,
  }
})

// 动态参数
router.get('/profile/:userName', async (ctx, next) => {
  const { userName } = ctx.params
  ctx.body = {
    title: 'this is profile page',
    userName,
  }
})

// 加载更多

router.get('/loadMore/:userName/:pageIndex', async (ctx, next) => {
  const { userName, pageIndex } = ctx.params
  // const date1 = dayjs(userName)
  // let time = date1.diff(pageIndex, 'month', true)
  ctx.body = {
    title: 'this is loadMore API',
    userName,
    pageIndex,
  }
})

module.exports = router
