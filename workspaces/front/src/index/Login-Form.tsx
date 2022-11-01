import React, { useState } from "react"
import graphql from "babel-plugin-relay/macro";
import {
    loadQuery,
    usePreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from "../RelayEnvironment";
import { Navigate, useNavigate } from "react-router-dom";

export function LoginForm() {
    const returnState = (param: any) => {
        let [state, setState] = useState(param);
        return {
            state, setState
        }
    };

    const navigate = useNavigate();

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

    return (

        <form>
            {formSettings.map((form, idx) => (
                <div key={`div${idx}`}>
                    <label htmlFor={form.name} key={`label${idx}`}>{form.label}</label>
                    <input type={form.type} id={form.name} value={form.state} onChange={(e) => form.setState(e.target.value)} key={`input${idx}`} />
                </div>
            ))}
            <button type="button" onClick={async () => {
                const loadedQuery = loadQuery(RelayEnvironment, loginQuery, {
                    email: formSettings[0].state,
                    password: formSettings[1].state
                });
  
                await navigate("/logged", {state: {loginQuery, loadedQuery}})
            }}>Enviar</button>
        </form >


    )
}