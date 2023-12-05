import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import loader from '../assets/loader- 1699173093200.json'


const PrivateRoute = ({children}) => {

    const {user,isLoading} = useContext(AuthContext);
    const location = useLocation();

    if(isLoading){
        return <Lottie className=" w-full max-h-screen" animationData={loader}></Lottie>
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;