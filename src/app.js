/*
 * @LastEditors  : Yx
 * @LastEditTime : 2022-12-19 10:10:54
 * @Description  : app.js
 * @Author       : Yx
 * @Date         : 2022-10-11 21:58:06
 * @FilePath     : \node-koa2\src\app.js
 */

const path = require('path')
const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-generic-session')
const redisStore = require('koa-redis')
const koaStatic = require('koa-static')

const { SESSION_SECRET_KEY } = require('./conf/secretKeys')
const { REDIS_CONF } = require('./conf/db')
const { isProd } = require('./utils/env')

// 定义 导入页面
const index = require('./routes/index')
const userViewRouter = require('./routes/view/users')
const errorViewRouter = require('./routes/view/error')
// 定义 导入API
const userAPIRouter = require('./routes/api/user')
const utilsAPIRouter = require('./routes/api/utils')

// error handler
let onerrorConf = {}
if (isProd) {
  onerrorConf = {
    // 错误重定向至错误页面
    redirect: '/error',
  }
}
onerror(app, onerrorConf)

// middlewares
app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text'],
  }),
)
app.use(json())
app.use(logger())
app.use(koaStatic(__dirname + '/public'))
app.use(koaStatic(path.join(__dirname, '..', 'uploadFiles')))

app.use(
  views(__dirname + '/views', {
    extension: 'ejs',
  }),
)

// session 配置
app.keys = [SESSION_SECRET_KEY]
app.use(
  session({
    key: 'weibo.sid', // cookie name 默认是 `koa.sid`
    prefix: 'weibo:sess:', // redis key 的前缀，默认是 `kos:sess：`
    cookie: {
      path: '/',
      httpOnly: true, // 只能在 serve 端修改，禁止客户端修改
      maxAge: 24 * 60 * 60 * 1000, // ms cookie 过期时间
    },
    // ttl: 24 * 60 * 60 * 1000, // redis 过期时间，默认与 cookie.maxAge 一致
    store: redisStore({
      all: `${REDIS_CONF.host}:${REDIS_CONF.port}`,
    }),
  }),
)

// // logger 中间值演示
// app.use(async (ctx, next) => {
//   const start = new Date();
//   await next();
//   const ms = new Date() - start;
//   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
// });

// routes 注册
app.use(index.routes(), index.allowedMethods())
// 页面注册
app.use(userViewRouter.routes(), userViewRouter.allowedMethods())
// 接口注册
app.use(userAPIRouter.routes(), userAPIRouter.allowedMethods())
app.use(utilsAPIRouter.routes(), utilsAPIRouter.allowedMethods())

// 404 放在最后注册
app.use(errorViewRouter.routes(), errorViewRouter.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

module.exports = app
