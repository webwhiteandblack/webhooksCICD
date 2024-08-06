const Router = require('@koa/router');
const webhookRouter=require("./webhookRouter.js")
const router = new Router();
router.post(webhookRouter.path,webhookRouter.controller)

module.exports=router