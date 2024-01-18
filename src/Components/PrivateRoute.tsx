import {ReactNode} from "react";
import {useLocalStorage} from "../Context/LocalStorageContext.tsx";
import {Navigate} from "react-router-dom";

type privateRouteProps = {
    children : ReactNode
}
export function PrivateRoute({children}: privateRouteProps){
    const { currentUser } = useLocalStorage()
    return currentUser.email ? <>{children}</> : <Navigate to="/login"/>
}