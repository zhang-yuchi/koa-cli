const Router = require('koa-router')
const { testValidator } = require('../../validators/validator')
const { testException } = require('../../../core/httpException')
const { Auth } = require('../../../middlewares/auth')
const router = new Router({
  prefix:'/v1/test'
})
router.get('/hello/:id',async(ctx)=>{
  const v = await new testValidator().validate(ctx)
  console.log(v.get('path.id'))//path query body header
  ctx.body={
    msg:"hello"
  }
})
module.exports = router