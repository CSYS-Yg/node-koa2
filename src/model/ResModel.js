/*
 * @LastEditors  : Yx
 * @LastEditTime : 2022-12-06 20:33:01
 * @Description  : res 的数据模型
 * @Author       : Yx
 * @Date         : 2022-12-06 20:28:06
 * @FilePath     : \node-koa2\src\db\model\ResModel.js
 */

class BaseModer {
  constructor({ errno, data, message }) {
    this.errno = errno
    if (data) {
      this.data = data
    }
    if (message) {
      this.message = message
    }
  }
}

/**
 *成功的数据模型
 */
class SuccessModes extends BaseModer {
  constructor(data = {}) {
    super({
      errno: 0,
      data,
    })
  }
}

/**
 * 失败的数据模型
 */
class ErrorModes extends BaseModer {
  constructor({ errno, message }) {
    super({
      errno,
      message,
    })
  }
}

module.exports = {
  SuccessModes,
  ErrorModes,
}
