import { usePreloadedQuery } from "react-relay";
import { useLocation } from "react-router";

export function Logged(props:any){
    const location = useLocation();
    const loginQuery = location.state.loginQuery;
    const loadedQuery = location.state.loadedQuery;

    const data = usePreloadedQuery(loginQuery, loadedQuery);
    return <h1>You are logged in!</h1>
}