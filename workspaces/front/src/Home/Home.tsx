import { usePreloadedQuery, useQueryLoader } from "react-relay";
import { useLocation } from "react-router";
import graphql from "babel-plugin-relay/macro";
import { useEffect, useState } from "react";
import { injectPath } from "../resources/router-path-provider";
import { FlexColumnDiv, FlexDiv } from "../shared/styledComps";
import { PersonHomeInfo } from "./PersonHomeInfo";
import { GeneralPostBoard } from "./GeneralPostBoard";
import styled from "styled-components";

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

const AdjustedDiv = styled.div`
    width: 70vw;
    display: flex;
    justify-content: space-between;
`;

const MasterDiv = styled(FlexColumnDiv)`
    align-items: center;
    justify-content: center;
`;

export function Home(props: any) {
    const { state, pathname } = useLocation();
    useEffect(() => injectPath(pathname));

    const [queryReference, loadQuery, disposeQuery] = useQueryLoader(HomeQuery);


    useEffect(() => {
        if (state && !state.user) {
            loadQuery({ email: state.email, password: state.password });
            return () => disposeQuery();
        }
    }, [loadQuery, disposeQuery, state]);

    return (
        <MasterDiv>
            {state && state.user ? <Greet data={state.user} /> : queryReference ? <Greet query={HomeQuery} queryRef={queryReference} /> : null}
            <AdjustedDiv>
                <PersonHomeInfo />
                <GeneralPostBoard />
            </AdjustedDiv>
        </MasterDiv>
    );
}

function Greet(props: any) {
    const P = styled.p`
        align-self: flex-end;
    `
    if (props.data) return <P>Logado como {props.data}</P>
    const data = usePreloadedQuery(props.query, props.queryRef) as { loginInfo: { name: string } };
    return <P>Logado como {data.loginInfo.name}</P>;
}

