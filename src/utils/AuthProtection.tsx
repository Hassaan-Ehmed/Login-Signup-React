import React from 'react'
import { Navigate } from 'react-router-dom';
import { Decrypt } from './Incryption';
import { getDataToLocalStorage } from './localstorage';

export default function AuthProtection({children}:any) {

let isToken = getDataToLocalStorage("userToken")

if(isToken){

    return   <Navigate to={'/'} replace/>
    
}


    return children
}
