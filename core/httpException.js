const { HttpException } = require('lin-mizar')
class testException extends HttpException{
  constructor(msg,code,errorCode){
    super()
    this.msg = msg ||"测试错误"
    this.code = code||400
    this.errorCode = errorCode||10000
  }
}
module.exports = {
  testException
}