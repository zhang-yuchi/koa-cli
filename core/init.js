const path = require('path')
const requireDirectory = require('require-directory')
const Router = require('koa-router')
class InitManager{
  static initCore(app){
    InitManager.app = app
    InitManager.initApiRouter()
  }
  static initApiRouter(){
    const apiDirectory = path.join(__dirname,'../app/api')
    requireDirectory(module,apiDirectory,{
      visit:whenLoadRouter
    })
    function whenLoadRouter(router){
      if(router instanceof Router){
        InitManager.app.use(router.routes())
      }
    }
  }
}
module.exports = InitManager