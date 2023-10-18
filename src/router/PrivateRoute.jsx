/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();
     if (user) {
       return children;
     }
     if (loading) {
       return <span className="loading loading-dots loading-lg"></span>;
     }
     return (
       <div>
         <Navigate to={"/login"} state={location.pathname}></Navigate>
       </div>
     );
};

export default PrivateRoute;