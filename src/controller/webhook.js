module.exports=(ctx)=>{
    console.log(ctx.request.body)
    // ctx.status=202
    ctx.body = {
      errCode: 200,
      errMsg: 'Success'
    }
}