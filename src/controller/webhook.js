const { ChildProcess } = require("child_process");
const crypto = require("crypto");
module.exports = (ctx) => {
  const hash = crypto.createHash("sha256"); // sha256或者md5
  hash.update("123456");

  const res = hash.digest("hex");
  const eventType = ctx.headers["x-github-event"];
  const depolySing=ctx.headers["x-hub-signature-256"];
  // ctx.status=202
  if(res==eventType){
    if(eventType=='push'){
      ChildProcess.spawnSync("sh",["../../deploy.sh"])
    }
  
    ctx.body = {
      errCode: 200,
      errMsg: "Success",
    };
  }else{
    ctx.status=500
    ctx.body = {
      errCode: 500,
      errMsg: "Success",
    };
  }
  
};
