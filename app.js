const koa = require('koa')
const bodyparser = require('koa-bodyparser')
const InitManger = require('./core/init')
const catchError = require('./middlewares/catchException')
const app = new koa()
app.use(catchError)//异常捕获 必须在initCore前面
InitManger.initCore(app)//现在全局将会挂载app
app.use(bodyparser())//增加body解析功能
//-------------自定义中间件----------------
app.listen(3000)