import React, { useState } from "react";

export function Cadastrar(props: any) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState(new Date().toString());
    const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");


    const formSettings = [
        { name: "name", type: "text", label: "Nome", state: name, setState: setName },
        { name: "email", type: "text", label: "E-mail", state: email, setState: setEmail },
        { name: "birthday", type: "date", label: "Data de Nascimento", state: birthday, setState: setBirthday },
        { name: "profile-photo", type: "file", label: "Foto de Perfil", state: profilePhoto },
        { name: "password", type: "password", label: "password", state: password, setState: setPassword },
        { name: "password-confirmation", type: "password", label: "password", state: passwordConfirm, setState: setPasswordConfirm }
    ]

    return (
        <form action="">
            {formSettings.map(form => <div>
                <label htmlFor={form.name}>{form.label}</label>
                {form.type === "file" ?
                    <input type="file" value={profilePhoto?.name} id={form.name} onChange={e=>setProfilePhoto(e.target.files?.item(0) as File)} /> :
                    <input type="text" value={form.state as string} id={form.name} onChange={e=>form.setState ? form.setState(e.target.value) : undefined} />}
            </div>)}
            <button>Criar Perfil</button>
        </form>
    )
}