const KoaRouter = require("@koa/router");
const enemyRouter = new KoaRouter();

enemyRouter.get("/enemies", (ctx) => {
  ctx.body = "All my enemies";
});

module.exports = enemyRouter.routes();
