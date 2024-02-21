import React from 'react'
import { Navigate } from 'react-router-dom';

export default function AuthProtection({children}:any) {

let isToken = JSON.parse(localStorage.getItem("userToken") as string);

if(isToken){

    return   <Navigate to={'/'} replace/>
    
}


    return children
}
