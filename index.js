require("dotenv").config();

const Koa = require("koa");
const db = require("./db");
const router = require("./routes");
const bodyParser = require("koa-bodyparser");
const error = require("./middleware/error");

const app = new Koa();

db.authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  });

app.use(error);
app.use(bodyParser());
app.use(router);

app.listen(process.env.PORT, () =>
  console.log("Server started on port: ", process.env.PORT)
);
