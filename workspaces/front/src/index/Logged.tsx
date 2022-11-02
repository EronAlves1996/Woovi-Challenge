import { usePreloadedQuery, useQueryLoader } from "react-relay";
import { useLocation } from "react-router";
import graphql from "babel-plugin-relay/macro";
import { useEffect } from "react";
import { injectPath } from "./router-path-provider";

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

export function Logged(props: any) {
    const { state, pathname } = useLocation();
    useEffect(() => {
        injectPath(pathname);
    }, [])

    if (state.user) {
        return <h1> You are logged in {state.user}</h1>
    } else {
        const [queryReference, loadQuery, disposeQuery] = useQueryLoader(LoggedQuery);
        useEffect(() => {
            loadQuery({ email: state.email, password: state.password });
            return () => disposeQuery();
        }, [loadQuery, disposeQuery, state])

        return (
            <div>
                {queryReference != null ? <Greet query={LoggedQuery} queryRef={queryReference} /> : null}
            </div>
        );
    }
}

function Greet(props: any) {
    const data = usePreloadedQuery(props.query, props.queryRef) as { loginInfo: { name: string } }
    return <h1> You are logged in {data!.loginInfo.name} </h1>
}

