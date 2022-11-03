/*
 * @LastEditors: Yx
 * @LastEditTime: 2022-11-03 23:40:28
 * @Description: 
 * @Author: Yx
 * @Date: 2022-11-03 22:15:28
 * @FilePath: \node-koa2\src\routes\index.js
 */

const router = require('koa-router')()

router.get('/', async (ctx, next) => {
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
  // const session = ctx.session
  // if (session.viewNum == null) {
  //   session.viewNum = 0
  // }
  // session.viewNum++
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
  ctx.body = {
    title: 'this is loadMore API',
    userName,
    pageIndex,
  }
})

module.exports = router
