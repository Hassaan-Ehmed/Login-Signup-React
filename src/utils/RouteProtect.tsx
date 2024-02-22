import React from "react";
import { Navigate } from "react-router-dom";
import { Decrypt } from "./Incryption";

export default function RouteProtection({ children }: any) {

  // let checkToken;

  // try {

  //   checkToken = JSON.parse( localStorage.getItem("userToken") as string)
    
  // } catch(error) {
    
  //   checkToken = JSON.parse( Decrypt(localStorage.getItem("userToken")) as string)
    
  // }
  
  



  // if (!checkToken) {
  //   return <Navigate to={"/login"} replace />;
  // }

  return children;
}
