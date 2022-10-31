import { useState } from "react"

export function LoginForm() {
    const returnState = (param:any) => {
        let [state, setState] = useState(param);
        return {
            state, setState
        }
    };

    const formSettings = [
        {name: "email", type: "text", label:"E-mail", ...returnState("")},
        {name: "password", type: "password", label: "password", ...returnState("")}
    ]

    return (
        <form>
            {formSettings.map(form => (
                <div>
                    <label htmlFor={form.name}>{form.label}</label>
                    <input type={form.type} id={form.name} value={form.state} onChange={(e)=>form.setState(e.target.value)}/>
                </div>
            ))}
            <button type="button" onClick={()=>formSettings.forEach(form => console.log(form.state))}>Enviar</button>
        </form>
    )
}