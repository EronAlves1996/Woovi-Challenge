export const verifyLogin = async ()=>{
    const response = await fetch(`${import.meta.env.VITE_BE_HOST}:${import.meta.env.VITE_BE_PORT}/verify`, {
        method: "GET",
        credentials: "include"
    });
    const json = await response.json();
    return json.user;
}