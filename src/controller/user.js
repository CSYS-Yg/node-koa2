/*
 * @LastEditors  : Yx
 * @LastEditTime : 2022-12-14 13:56:44
 * @Description  : user 业务逻辑处理
 * @Author       : Yx
 * @Date         : 2022-11-27 13:30:21
 * @FilePath     : \node-koa2\src\controller\user.js
 */

const { getUserInfo, createUser } = require('../services/user')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const {
  registerUserNameNotExistInfo,
  registerUserNameExistInfo,
  registerFailInfo,
  loginFailInfo,
} = require('../model/ErrorInfo')
const doCrypto = require('../utils/cryp')
/**
 * 用户名是否存在
 * @param {string} userName 用户名
 */
async function isExist(userName) {
  // 调用 services 获取数据
  const userInfo = await getUserInfo(userName)
  if (userInfo) {
    // 已存在
    return new SuccessModel(userInfo)
  }
  if (!userInfo) {
    // 不存在
    return new ErrorModel(registerUserNameNotExistInfo)
  }
  // 统一返回格式
}

/**
 * 注册接口
 * @param {string} userName 用户名
 * @param {string} password 密码
 * @param {number} gender 性别（1 男 ，2 女 ，3 保密）
 */
async function register({ userName, password, gender }) {
  const userInfo = await getUserInfo(userName)
  if (userInfo) {
    // 用户名已存在
    return new ErrorModel(registerUserNameExistInfo)
  }
  try {
    await createUser({
      userName,
      password: doCrypto(password),
      gender,
    })
    return new SuccessModel()
  } catch (ex) {
    console.error(ex.message, ex.stack)
    return new ErrorModel(registerFailInfo)
  }
}

/**
 *  登录接口
 * @param {object} ctx koa2 ctx
 * @param {string} userName 用户名
 * @param {string} password 密码
 * @returns
 */
async function login(ctx, userName, password) {
  // 调用 services 获取数据
  const userInfo = await getUserInfo(userName, doCrypto(password))
  if (!userInfo) {
    console.log('🚀 ~ file: user.js:73 ~ login ~ userInfo', userInfo)
    // 登录失败
    return new ErrorModel(loginFailInfo)
  }
  if (ctx.session.userInfo == null) {
    ctx.session.userInfo = userInfo
  }
  return new SuccessModel()
}

module.exports = {
  isExist,
  register,
  login,
}
