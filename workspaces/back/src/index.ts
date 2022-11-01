import Koa, { Context } from "koa";
import cors from "@koa/cors";
import Router  from '@koa/router';
import { graphqlHTTP } from "koa-graphql";
import { schema as nschema } from "./login-utils/login.js";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

const app = new Koa();
const router = new Router();

export const verify = (ctx: Context) => {
  const cookie = ctx.cookies.get("JWT-Login");
  ctx.response.set("Access-Control-Allow-Credentials", "true");
  if(cookie){
    try{
      const result = jwt.verify(cookie, process.env.JWT_SECRET) as {user: string};
      ctx.response.status = 200;
      ctx.response.body = JSON.stringify({ user: result.user });
    } catch(ex) {
      ctx.response.status = 401;
      ctx.response.body = JSON.stringify({ msg: "Invalid token "});
    }
  } else {
    ctx.response.status = 403;
    ctx.response.body = JSON.stringify({msg: "You are not authorized for this resource"});
  }
}

router.get("/verify", (ctx, next) => {
  next();
}, ctx=>verify(ctx));

router.all(
  '/api',
  graphqlHTTP({
    schema: nschema,
    graphiql: true
  }),
);

router.get("/", (ctx, next)=>{
  ctx.body="Hello World";
})

app
.use(cors())
.use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);

console.log("Listening");