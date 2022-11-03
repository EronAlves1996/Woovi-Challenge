import { PropsWithChildren, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";


export const VerifyLogin = (props: PropsWithChildren) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BE_HOST}:${import.meta.env.VITE_BE_PORT}/verify`, {
            credentials: 'include',
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if (response.status === 200) return response.json();
                throw new Error("Not validated");
            })
            .then(json => {
                if (location.pathname === "/") {
                    navigate("/home", { state: { user: json.user } });
                    return;
                } 
                if (!location.state)  navigate(location.pathname, { state: {user: json.user }});
                navigate(location.pathname, { state: {user: json.user }});
            })
            .catch(err => { if (location.pathname !== "/") navigate("/", { state: { msg: "Gentileza realizar login" } }) });
    }, [location.pathname]);

    return (
        <div>
            {props.children}
        </div>
    )
}