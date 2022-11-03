/**
 * @format
 * @LastEditors: Yx
 * @LastEditTime: 2022-11-01 23:34:30
 * @Description: sequelize 同步
 * @Author: Yx
 * @Date: 2022-11-01 23:33:21
 * @FilePath: \node-koa2\src\db\sync.js
 */

const seq = require('./seq.js')

// 测试链接
seq
  .authenticate()
  .then(() => {
    console.log('ok')
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
