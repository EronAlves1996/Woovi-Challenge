import React, { useState } from "react"
import graphql from "babel-plugin-relay/macro";
import {
    RelayEnvironmentProvider,
    loadQuery,
    usePreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from "../RelayEnvironment";
import { useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

export function LoginForm() {
    const returnState = (param: any) => {
        let [state, setState] = useState(param);
        return {
            state, setState
        }
    };

    const { Suspense } = React;

    const formSettings = [
        { name: "email", type: "text", label: "E-mail", ...returnState("") },
        { name: "password", type: "password", label: "password", ...returnState("") }
    ]

    const loginQuery = graphql`
        query LoginFormQuery($email: String!, $password: String!){
            loginInfo(loginInformation:{
                email: $email
                password: $password
            }){
                name
            }
        }
        `;

    const tryLogin = () => {
        const loadedQuery = loadQuery(RelayEnvironment, loginQuery, {
            email: formSettings[0].state,
            password: formSettings[1].state
        });
        const data = usePreloadedQuery(loginQuery, loadedQuery);
        const navigate = useNavigate();
        navigate("/logged");
    }
    
    return (
        <RelayEnvironmentProvider environment={RelayEnvironment} >
            <ErrorBoundary fallbackRender={({ error }) => <div>User not found!</div>} >
                <Suspense fallback={"Loading..."} >
                    <form>
                        {formSettings.map((form, idx) => (
                            <div key={`div${idx}`}>
                                <label htmlFor={form.name} key={`label${idx}`}>{form.label}</label>
                                <input type={form.type} id={form.name} value={form.state} onChange={(e) => form.setState(e.target.value)} key={`input${idx}`}/>
                            </div>
                        ))}
                        <button type="button" onClick={() => tryLogin()}>Enviar</button>
                    </form >
                </Suspense>
            </ErrorBoundary>
        </RelayEnvironmentProvider >

    )
}