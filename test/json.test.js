/*
 * @LastEditors: Yx
 * @LastEditTime: 2022-11-03 22:55:51
 * @Description: json test
 * @Author: Yx
 * @Date: 2022-11-03 22:46:37
 * @FilePath: \node-koa2\test\json.test.js
 */
const server = require('./server')

test('Json 接口返回数据格式正确', async () => {
  // get http 测试
  const res = await server.get('/json')
  // post http 测试
  // const res = await server.post('/login').send({
  //   userName: 'zhangsan',
  //   password: '123',
  // })

  expect(res.body).toEqual({
    title: 'koa2 json',
  })
  expect(res.body.title).toBe('koa2 json')
})
