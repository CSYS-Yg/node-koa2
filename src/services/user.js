/*
 * @LastEditors  : Yx
 * @LastEditTime : 2022-11-30 01:29:33
 * @Description  : 未备注
 * @Author       : Yx
 * @Date         : 2022-11-27 13:36:07
 * @FilePath     : \node-koa2\src\services\user.js
 */
// const { user, User } = require('../db/model/index')

/**
 * 获取用户信息
 * @param {string} userName 用户名
 * @param {string} password 密码
 */
async function getUserInfo(userName, password) {
  // 查询条件
  const whereOpt = {
    userName,
  }
  if (password) {
    Object.assign(whereOpt, { password })
  }
  // 查询
  const result = await User.findOne({
    attributes: ['id', 'userName', 'nickName', 'picture', 'city'],
    where: whereOpt,
  })
  if (result == null) {
    // 未找到
    return result
  }
  return result.dataValues
}

module.exports = {
  getUserInfo,
}
