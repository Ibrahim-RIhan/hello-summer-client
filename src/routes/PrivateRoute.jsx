import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import {  Vortex } from "react-loader-spinner";




const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        return <div className='flex justify-center items-center' style={{ height: '100vh' }}>
          <Vortex
  visible={true}
  height="80"
  width="80"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
/>
        </div>
    }
    if (user) {
        return children
    }

    return <Navigate state={{ from: location }} to="/login" replace></Navigate>


};
export default PrivateRoute;