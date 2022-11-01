import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { verifyLogin } from "./verifyLogin";

export function LoginForm() {
    const {state} = useLocation();
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

    useEffect(()=>{
        (async ()=>{
                const user = await verifyLogin();
                if(user) navigate("/logged", { state: { user } });
        })();
    }, [])
   
    return (
        <form>
            {state ? <p>{state.msg}</p> : <></>}
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