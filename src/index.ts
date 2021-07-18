import "reflect-metadata";
import {createConnection} from "typeorm";

require("dotenv").config();

import * as Koa from 'koa';
import friendRouter from './routes/friendRoutes';
import * as bodyParser from "koa-bodyparser";
import error from "./middleware/error";

const app = new Koa();

app.use(error);
app.use(bodyParser());
app.use(friendRouter.routes());


createConnection().then( () => {
    console.log("DB connected")
    app.listen(9081, () =>
  console.log("Server started on port: ", 9081)
);

}).catch(error => console.log(error));
