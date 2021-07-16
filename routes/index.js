const KoaRouter = require("@koa/router");
const friendRouter = require("./friendRouter");
const enemyRouter = require("./enemyRouter");

const router = new KoaRouter();

router.use(friendRouter).use(enemyRouter);

module.exports = router.routes();
