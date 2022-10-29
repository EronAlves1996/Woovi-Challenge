import { useState } from "react";

type FormProps = {
    type: string;
    label: string;
    name: string;
}

export function Form(props: FormProps) {
    const [thisState, setThisState] = useState("");

    return {
        getForm: () => (
            <div>
                <label htmlFor={props.name}>{props.label}</label>
                <input type={props.type} id={props.name} value={thisState} onChange={(e) => setThisState(e.target.value)} />
            </div>
        ),
        getState: () => thisState,
        setState: (value: string) => setThisState(value)
    }
}