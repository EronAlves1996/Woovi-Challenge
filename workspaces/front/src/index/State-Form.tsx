import { useState } from "react";

type FormProps = {
    type: string;
    name: string;
}

export function Form(props: FormProps){
    const [thisState, setThisState] = useState("");

    return {
        getForm: ()=>(<input type={props.type} id={props.name} value={thisState} onChange={(e)=>setThisState(e.target.value)}/>),
        getState: ()=>thisState,
        setState: (value:string)=>setThisState(value)
    }
}