// import React from 'react';

import { AuthContext } from "@/contexts/AuthContext";
import { use } from "react";
import { Navigate, useLocation } from "react-router";
import loadingSpin from "../assets/loader.json"
import Lottie from "lottie-react";

const PrivateRoutes = ({children}) => {

    const{user, loading} = use(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="flex justify-center items-center h-screen"><Lottie.default className=" w-[250px]" animationData={loadingSpin}></Lottie.default></div>
    }

    if(!user){
        return <Navigate to="/login" state={location?.pathname}></Navigate>
    }

    return children;
};

export default PrivateRoutes;