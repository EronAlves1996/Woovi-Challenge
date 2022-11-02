
export const verifyLogin = async ()=>{
    const response = await fetch(`${import.meta.env.VITE_BE_HOST}:${import.meta.env.VITE_BE_PORT}/verify`, {
        credentials: 'include',
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });
    const json = await response.json();
    return json.user;
}