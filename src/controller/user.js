/*
 * @LastEditors  : Yx
 * @LastEditTime : 2022-12-06 20:53:43
 * @Description  : user 业务逻辑处理
 * @Author       : Yx
 * @Date         : 2022-11-27 13:30:21
 * @FilePath     : \node-koa2\src\controller\user.js
 */

const { getUserInfo } = require('../services/user')
const { SuccessModes, ErrorModes } = require('../model/ResModel')
const { registerUserNameNotExistInfo } = require('../model/ErrorInfo')

/**
 *
 * @param {string} userName 用户名
 */
async function isExist(userName) {
  // 调用 services 获取数据
  const userInfo = await getUserInfo(userName)
  if (userInfo) {
    // 已存在
    return new SuccessModes(userInfo)
  }
  if (!userInfo) {
    // 不存在
    return new ErrorModes(registerUserNameNotExistInfo)
  }
  // 统一返回格式
}

module.exports = {
  isExist,
}
