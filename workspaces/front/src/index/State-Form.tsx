import React, { Dispatch, SetStateAction } from "react";
import { useState } from "react";

type FormProps = {
    type?: string;
    label: string;
    name: string;
}

export function Form() {
    let [thisState, setThisState]: [string | null, Dispatch<SetStateAction<string>> | null] = [null, null];

    return {
        getForm: (props: FormProps) => {
            [thisState, setThisState] = useState<string>("");
            return (
                <div>
                    <label htmlFor={props.name}>{props.label}</label>
                    <input type={props.type || "text"} id={props.name} value={thisState} onChange={(e) => setThisState!(e.target.value)} />
                </div>
            )
        },
        getState: () => thisState
    }
}