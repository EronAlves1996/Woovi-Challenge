import Koa from "koa";
import cors from "@koa/cors";
import Router  from '@koa/router';
import { graphqlHTTP } from "koa-graphql";
import { schema as nschema } from "./login-utils/login.js";

const app = new Koa();
const router = new Router();

router.all(
  '/api',
  graphqlHTTP({
    schema: nschema,
    graphiql: true,
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