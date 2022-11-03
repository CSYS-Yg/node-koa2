/*
 * @LastEditors: Yx
 * @LastEditTime: 2022-11-03 22:46:14
 * @Description: jest server
 * @Author: Yx
 * @Date: 2022-11-03 22:43:46
 * @FilePath: \node-koa2\test\server.js
 */
const request = require('supertest')
const server = require('../src/app').callback()

module.exports = request(server)
