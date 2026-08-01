// import React from 'react';

import { AuthContext } from "@/contexts/AuthContext";
import { use } from "react";
import { Navigate } from "react-router";

const PrivateRoutes = ({children}) => {

    const{user} = use(AuthContext);
    console.log("private", user)

    if(!user){
        return <Navigate to="/login"></Navigate>
    }

    return children;
};

export default PrivateRoutes;