import { useState } from "react";

type FormProps = {
    type: string;
    label: string;
    name: string;
}

export function Form() {
    const [thisState, setThisState] = useState("");

    return {
        getForm: (props: FormProps) =>(
        <div>
            <label htmlFor={props.name}>{props.label}</label>
            <input type={props.type} id={props.name} value={thisState} onChange={(e) => setThisState(e.target.value)} />
        </div>
        ),
        getState: () => thisState
    }
}