import Koa from "koa";
import Router  from '@koa/router';
import { graphqlHTTP } from "koa-graphql";
import { schema as nschema } from "./login-utils/login.js";

const app = new Koa();
const router = new Router();

router.all(
  '/login-utils',
  graphqlHTTP({
    schema: nschema,
    graphiql: true,
  }),
);


router.get("/", (ctx, next)=>{
  ctx.body="Hello World";
})

app
.use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);

console.log("Listening");