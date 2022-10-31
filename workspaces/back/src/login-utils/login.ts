import { graphqlHTTP } from "koa-graphql";
import graphql from "graphql";
import { dao } from "./loginDao.js";

const userType = new graphql.GraphQLObjectType({
    name: "User",
    fields: {
        id: { type: graphql.GraphQLString },
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
            resolve: async (_, {loginInformation: {email, password}}) => {
                return (await dao.read(email, password)).toObject();
            }
        }
    }
})

export const schema = new graphql.GraphQLSchema({ query: checkLogin });