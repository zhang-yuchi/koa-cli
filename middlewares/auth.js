class Auth {
  get m() {//中间件,放入需要鉴权的接口处即可
    return async (ctx,next)=>{
      await next()
    }
  }
}
module.exports = Auth