const {
  HttpException
} = require('lin-mizar')
const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    if (error instanceof HttpException) {
      //已知错误
      const {
        msg,
        code,
        errorCode
      } = error
      ctx.body = {
        msg,
        code,
        errorCode
      }
      ctx.status = code
    } else {
      ctx.body = {
        msg: "服务器开小差了",
        code: 500,
        errorCode: 999
      }
      ctx.status = 500
    }
  }
}
module.exports = catchError