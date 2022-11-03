import { usePreloadedQuery, useQueryLoader } from "react-relay";
import { useLocation } from "react-router";
import graphql from "babel-plugin-relay/macro";
import { useEffect } from "react";
import { injectPath } from "../resources/router-path-provider";
import { FlexDiv } from "../shared/styledComps";

const HomeQuery = graphql`
query HomeQuery($email: String!, $password: String!){
    loginInfo(loginInformation:{
        email: $email
        password: $password
    }){
        name
    }
}
`;

export function Home(props: any) {
    const { state, pathname } = useLocation();
    injectPath(pathname);

    const [queryReference, loadQuery, disposeQuery] = useQueryLoader(HomeQuery);

    if (!state.user) {
        useEffect(() => {
            loadQuery({ email: state.email, password: state.password });
            return () => disposeQuery();
        }, [loadQuery, disposeQuery, state, queryReference])
    }

    return (
        <div>
            {state.user ? <Greet data={state.user} /> : queryReference ? null : <Greet query={HomeQuery} queryRef={queryReference} />}
            <FlexDiv>
                <PersonHomeInfo />
                <GeneralPostBoard />
            </FlexDiv>
        </div>
    );
}

function Greet(props: any) {
    if (props.data) return <p>Logado como {props.data}</p>

    const data = usePreloadedQuery(props.query, props.queryRef) as { loginInfo: { name: string } };
    return <p>Logado como {data.loginInfo.name}</p>;
}

