const Router = require('@koa/router');
const webhookRouter=require("./webhookRouter.js")
const router = new Router();
router.get(webhookRouter.path,webhookRouter.controller)

module.exports=router