/*
 * @LastEditors: Yx
 * @LastEditTime: 2022-11-03 22:40:12
 * @Description: test demo
 * @Author: Yx
 * @Date: 2022-11-03 22:36:40
 * @FilePath: \node-koa2\test\demo.test.js
 */
function sum(a, b) {
  return a + b
}

test('10 + 20 = 30', () => {
  const res = sum(10, 20)
  expect(res).toBe(30)
  expect(res).not.toBe(40)
})
