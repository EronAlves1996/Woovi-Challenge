import { graphqlHTTP } from "koa-graphql";
import graphql from "graphql";

const userType = new graphql.GraphQLObjectType({
    name: "User",
    fields: {
        id: { type: graphql.GraphQLString },
        name: { type: graphql.GraphQLString },
        email: { type: graphql.GraphQLString },
        password: { type: graphql.GraphQLString }
    }
});

const loginInformationType = new graphql.GraphQLObjectType({
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
            type: loginInformationType,
            args: {
                email: { type: graphql.GraphQLString },
                password: { type: graphql.GraphQLString }
            },
            resolve: (_, {email, password}) => {
                return {email, password};
            }
        }
    }
})

export const schema = new graphql.GraphQLSchema({ query: checkLogin });