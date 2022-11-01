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
            args: {loginInformation: {type: loginInformationType}},
            resolve: async (_, {loginInformation: {email, password}}, ctx) => {
                try{
                    const userRegistry = (await dao.read(email, password)).toObject();
                    const context: Context = ctx;
                    const jws = jwt.sign({ email: userRegistry.email }, process.env.JWT_SECRET);
                    context.cookies.set("JWT_Login", jws);
                    return userRegistry;
                } catch(ex){
                    const msg = "User not founded. Please verify your data"; 
                    return {
                        email: msg,
                        password: msg,
                        name: msg
                    }
                }
            }
        }
    }
})

export const schema = new graphql.GraphQLSchema({ query: checkLogin });