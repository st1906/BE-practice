export default async (ctx, next) => {
    try {
      await next();
    } catch (error) {
      console.error(error);
      ctx.body = String(error);
      ctx.app.emit("error", error, ctx);
    }
  };