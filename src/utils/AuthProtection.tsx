import React from 'react'
import { Navigate } from 'react-router-dom';
import { Decrypt } from './Incryption';

export default function AuthProtection({children}:any) {

// let isToken = JSON.parse(Decrypt( localStorage.getItem("userToken")) as string);

// if(isToken){

//     return   <Navigate to={'/'} replace/>
    
// }


    return children
}
