
const Koa = require('koa');
const app = new Koa();
const router=require("./router/index")
app.use(async (ctx, next) => {
  await next()
  ctx.assert.equal('object', typeof ctx, 500, '某些开发错误')
})
app.use(async (ctx, next) => {
  await next()

  ctx.response.type = 'application/json'
})
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8000,()=>{
  console.log("server start in 8000")
});