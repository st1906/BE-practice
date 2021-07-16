const KoaRouter = require("@koa/router");
const friendController = require("../controllers/friendContoller");

const friendRouter = new KoaRouter();

friendRouter.get("/friends", async (ctx) => {
  const friends = await friendController.getFriends();
  ctx.body = { friends };
});

friendRouter.post("/friend", async (ctx) => {
  const newFriend = await friendController.insertFriend(ctx.request.body);
  ctx.body = newFriend;
});

module.exports = friendRouter.routes();
