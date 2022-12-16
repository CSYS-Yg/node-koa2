/*
 * @LastEditors  : Yx
 * @LastEditTime : 2022-12-15 10:45:05
 * @Description  : 未备注
 * @Author       : Yx
 * @Date         : 2022-11-27 13:36:07
 * @FilePath     : \node-koa2\src\services\user.js
 */
const { User } = require('../db/model/index')
const { formatUser } = require('./_format')

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
  //格式化
  const formatRes = formatUser(result.dataValues)
  // return
  return formatRes
}

/**
 * 创建用户
 * @param {string} userName 用户名
 * @param {string} password 密码
 * @param {string} gender 性别
 * @param {string} nickName 昵称
 */
async function createUser({ userName, password, gender = 3, nickName }) {
  const result = await User.create({
    userName,
    password,
    gender,
    nickName: nickName ? nickName : userName,
  })
  return result.dataValues
}

/**
 * 删除用户
 * @param {string} userName 用户名
 */
async function deleteUser(userName) {
  const result = await User.destroy({
    where: {
      userName,
    },
  })
  // result 返回删除行数
  return result > 0
}

module.exports = {
  getUserInfo,
  createUser,
  deleteUser,
}
