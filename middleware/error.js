const error = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    console.error(error);
    ctx.body = "Something happened";
    ctx.app.emit("error", error, ctx);
  }
};

module.exports = error;
