module.exports=(ctx)=>{
    console.log(ctx.request.body)
    ctx.body=JSON.stringify({
      msg:"hello"
    })
}