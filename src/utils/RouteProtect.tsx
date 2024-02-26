import React from "react";
import { Navigate } from "react-router-dom";
import { Decrypt } from "./Incryption";
import { getDataToLocalStorage } from "./localstorage";

export default function RouteProtection({ children }: any) {

  

  try {

   let isToken = getDataToLocalStorage("userToken") ?? null;
    
      
    if (!isToken) {
      return <Navigate to={"/login"} replace />;
    }
    
    return children;
    
    
      } 


  catch(error) {
    
    
  }
  
}
