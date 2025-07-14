import { useContext } from "react";
import { AuthContext } from "../Component/AuthencationAll/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const InstructorRoute = ({children}) => {

    let {user}=useContext(AuthContext)
    let location =useLocation()
    const stateInfo = location.state?.from?.pathname === "accessVideo";
    if (stateInfo) {
        return children
    }

    return <Navigate to="/"></Navigate>

};

export default InstructorRoute;