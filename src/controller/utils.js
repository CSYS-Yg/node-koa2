/*
 * @LastEditors  : Yx
 * @LastEditTime : 2022-12-17 17:55:52
 * @Description  : utils controller
 * @Author       : Yx
 * @Date         : 2022-12-17 16:36:09
 * @FilePath     : \node-koa2\src\controller\utils.js
 */
const path = require('path')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { uploadFileSizeFailInfo } = require('../model/ErrorInfo')
const fse = require('fs-extra')
// 文件最大体积
const MIX_SIZE = 1024 * 1024 * 1024

// 存储目录
const DIST_FOLDER_PATH = path.join(__dirname, '..', '..', 'uploadFiles')

// 是否需要创建目录
fse.pathExists(DIST_FOLDER_PATH).then((exist) => {
  if (!exist) {
    fse.ensureDir(DIST_FOLDER_PATH)
  }
})

/**
 *  保存文件
 * @param {string} name 文件名
 * @param {string} type 文件类型
 * @param {number} size 文件体积大小
 * @param {string} filePath 文件路径
 * @returns
 */
async function saveFile({ name, type, size, filePath }) {
  if (size > MIX_SIZE) {
    // 上传文件就会占用硬盘空间，过大则删除
    await fse.remove(filePath)
    return new ErrorModel(uploadFileSizeFailInfo)
  }
  // 移动文件
  const fileName = Date.now() + '.' + name // 防止重名
  const distFilePath = path.join(DIST_FOLDER_PATH, fileName)
  await fse.move(filePath, distFilePath)

  // 返回信息
  return new SuccessModel({
    url: '/' + fileName,
  })
}

module.exports = {
  saveFile,
}
