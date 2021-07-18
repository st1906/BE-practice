import * as Router from "@koa/router";
import * as friendController from "../controllers/friendController";

const friendRouter = new Router();

friendRouter.get("/friends", async (ctx) => {
  const friends = await friendController.getFriends();
  ctx.body = { friends };
});

friendRouter.post("/friend", async (ctx) => {
  const newFriend = await friendController.insertFriend(ctx.request.body);
  ctx.body = newFriend;
});

export default friendRouter;