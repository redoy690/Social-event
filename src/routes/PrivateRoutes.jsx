import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoutes = ({children}) => {
    
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname)
    if(loading){
        return <span className="loading ml-[50%] mt-[15%] loading-spinner loading-lg"></span>
    }


    if(user){
        return children
    }


    return <Navigate state={location.pathname} to="/login"></Navigate>
    ;
};
PrivateRoutes.propTypes = {
    children:PropTypes.object.isRequired,

}

export default PrivateRoutes;