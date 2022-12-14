/*
 * @LastEditors  : Yx
 * @LastEditTime : 2022-12-19 10:12:26
 * @Description  : utils api 路由
 * @Author       : Yx
 * @Date         : 2022-12-17 16:15:17
 * @FilePath     : \node-koa2\src\routes\api\utils.js
 */
const router = require('koa-router')()
const { saveFile } = require('../../controller/utils')
const { loginCheck } = require('../../middlewares/loginChecks')
const koaFrom = require('formidable-upload-koa')
router.prefix('/api/utils')

// 上传图片
router.post('/upload', loginCheck, koaFrom(), async (ctx, next) => {
  const file = ctx.req.files['file']
  if (!file) {
    return
  }
  const { size, path, name, type } = file
  ctx.body = await saveFile({
    name,
    type,
    size,
    filePath: path,
  })
})

module.exports = router
