import React, { useCallback, useState } from "react"

import {
    loadQuery
} from 'react-relay/hooks';
import RelayEnvironment from "../RelayEnvironment";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";

export function LoginForm() {
    const returnState = (param: any) => {
        let [state, setState] = useState(param);
        return {
            state, setState
        }
    };
    const formSettings = [
        { name: "email", type: "text", label: "E-mail", ...returnState("") },
        { name: "password", type: "password", label: "password", ...returnState("") }
    ]
    const navigate = useNavigate();
    
   
    return (
        <form>
            {formSettings.map((form, idx) => (
                <div key={`div${idx}`}>
                    <label htmlFor={form.name} key={`label${idx}`}>{form.label}</label>
                    <input type={form.type} id={form.name} value={form.state} onChange={(e) => form.setState(e.target.value)} key={`input${idx}`} />
                </div>
            ))}
            <button type="button" onClick={async () => {
                await navigate("/logged", { state: { email: formSettings[0].state, password: formSettings[1].state }  })
            }}>Enviar</button>
        </form >


    )
}