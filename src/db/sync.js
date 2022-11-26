/*
 * @LastEditors  : Yx
 * @LastEditTime : 2022-11-26 16:56:04
 * @Description  : sequelize 同步
 * @Author       : Yx
 * @Date         : 2022-11-03 09:09:02
 * @FilePath     : \node-koa2\src\db\sync.js
 */
const seq = require('./seq.js')
require('./model/index')

// 测试链接
seq
  .authenticate()
  .then(() => {
    console.log('ok 123')
  })
  .catch(() => {
    console.log('err')
  })

/**
 * force: 强制同步,即清空覆盖
 */
seq.sync({ force: true }).then(() => {
  console.log('同步成功')
  process.exit()
})
