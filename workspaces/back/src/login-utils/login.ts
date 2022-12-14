import graphql from "graphql";
import { Context } from "koa";
import { dao } from "./loginDao.js";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

const userType = new graphql.GraphQLObjectType({
    name: "User",
    fields: {
        name: { type: graphql.GraphQLString },
        email: { type: graphql.GraphQLString },
        password: { type: graphql.GraphQLString }
    }
});

const loginInformationType = new graphql.GraphQLInputObjectType({
    name: "LoginInformation",
    fields: {
        email: { type: graphql.GraphQLString },
        password: { type: graphql.GraphQLString }
    }
});

const checkLogin = new graphql.GraphQLObjectType({
    name: "Query",
    fields: {
        loginInfo: {
            type: userType,
            args: { loginInformation: { type: loginInformationType } },
            resolve: async (_, { loginInformation: { email, password } }, ctx) => {
                const context: Context = ctx;
                try {
                    const userRegistry = (await dao.read(email, password)).toObject();
                    const jws = jwt.sign({ user: userRegistry.name }, process.env.JWT_SECRET);
                    context.cookies.set(process.env.COOKIE_NAME , jws, { domain:"127.0.0.1", path: "/", httpOnly: true });
                    return userRegistry;
                } catch(ex) {
                    console.log(ex);
                    throw new Error("Invalid credentials");
                }
            }
        }
    }
})

export const schema = new graphql.GraphQLSchema({ query: checkLogin });