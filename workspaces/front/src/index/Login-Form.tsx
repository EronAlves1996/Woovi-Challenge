import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { injectPath } from "../resources/router-path-provider";
import { verifyLogin } from "../resources/verifyLogin";

export function LoginForm() {

    const { state, pathname } = useLocation();

    const [emailState, setEmailState] = useState("");
    const [passwordState, setPasswordState] = useState("");

    const formSettings = [
        { name: "email", type: "text", label: "E-mail", state: emailState, setState: setEmailState },
        { name: "password", type: "password", label: "password", state: passwordState, setState: setPasswordState }
    ]
    const navigate = useNavigate();
    injectPath(pathname);

    useEffect(() => {
        (async () => {
            const user = await verifyLogin();
            if (user) navigate("/home", { state: { user } });
        })();
    }, []);

    return (
        <div>
            <form>
                {state ? <p>{state.msg}</p> : <></>}
                {formSettings.map((form, idx) => (
                    <div key={`div${idx}`}>
                        <label htmlFor={form.name} key={`label${idx}`}>{form.label}</label>
                        <input type={form.type} id={form.name} value={form.state} onChange={(e) => form.setState(e.target.value)} key={`input${idx}`} />
                    </div>
                ))}
                <button type="button" onClick={async () => {
                    await navigate("/home", { state: { email: formSettings[0].state, password: formSettings[1].state } })
                }}>Enviar</button>
            </form >
        </div>
    )
}