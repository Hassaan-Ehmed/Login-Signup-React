import React from "react";
import { Navigate } from "react-router-dom";

export default function RouteProtection({ children }: any) {

  
  let checkToken = JSON.parse(localStorage.getItem("userToken") as string);

  if (!checkToken) {
    return <Navigate to={"/login"} replace />;
  }

  return children;
}
