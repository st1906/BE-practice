require("dotenv").config();

const Koa = require("koa");
const router = require("./routes");
const bodyParser = require("koa-bodyparser");
const error = require("./middleware/error");

const app = new Koa();

app.use(error);
app.use(bodyParser());
app.use(router);

app.listen(process.env.PORT, () =>
  console.log("Server started on port: ", process.env.PORT)
);
