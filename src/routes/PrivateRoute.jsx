import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";




const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        return <div className='flex justify-center items-center' style={{ height: '100vh' }}>
            <button className="btn loading btn-error btn-xl">Loading</button>
        </div>
    }
    if (user) {
        return children
    }

    return  <Navigate state={{ from: location }} to="/login" replace></Navigate>

  
};
export default PrivateRoute;