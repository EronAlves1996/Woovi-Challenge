import { loadQuery, usePreloadedQuery } from "react-relay";
import { Navigate, useLocation } from "react-router";
import graphql from "babel-plugin-relay/macro";
import RelayEnvironment from "../RelayEnvironment";

export function Logged(props: any) {
    const { state } = useLocation();

    const LoggedQuery = graphql`
        query LoggedQuery($email: String!, $password: String!){
            loginInfo(loginInformation:{
                email: $email
                password: $password
            }){
                name
            }
        }
        `;
    const loadedQuery = loadQuery(RelayEnvironment, LoggedQuery, {
        email: state.email,
        password: state.password
    });

    const data = usePreloadedQuery(LoggedQuery, loadedQuery) as { loginInfo: { name: string } };

    return (
        <div>
            <h1>You are logged in {data.loginInfo.name}</h1>
        </div>
    );
}

