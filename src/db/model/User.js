/*
 * @LastEditors  : Yx
 * @LastEditTime : 2022-11-26 15:56:54
 * @Description  : 用户数据模型
 * @Author       : Yx
 * @Date         : 2022-11-26 15:15:05
 * @FilePath     : \node-koa2\src\db\model\User.js
 */
const seq = require('../seq')
const { STRING, DECIMAL } = require('../types')

// user
const User = seq.define('user', {
  userName: {
    type: STRING,
    allowNull: false,
    unique: true, // 是否
    comment: '用户名唯一',
  },
  password: {
    type: STRING,
    allowNull: false,
    comment: '密码',
  },
  nickName: {
    type: STRING,
    allowNull: false,
    comment: '昵称',
  },
  gender: {
    type: DECIMAL,
    allowNull: false,
    defaultValue: 3, // 设置默认值
    comment: '性别（1 男性，2 女性，3 保密）',
  },
  picture: {
    type: STRING,
    comment: '头像 存储图片地址 url',
  },
  city: {
    type: STRING,
    comment: '城市',
  },
})

module.exports = User
