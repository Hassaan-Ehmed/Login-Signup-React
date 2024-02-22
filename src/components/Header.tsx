import React from "react";

export default function Header({ heading, img }: any) {
  return (
    <div
      style={{
        width: "100%",
        height: "30vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "15px 0 20px 0",
        position: "relative",
        backgroundBlendMode:"overlay",
       
        
      }}
    >
      <img
        src={img}
        alt=""
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: 1,
          filter:"blur(0)",
         
          // opacity: 0.6
        
        }}
      />
      <h1
        style={{
          textAlign: "center",
          fontSize: "3vw",
          zIndex: 2,
          color: "white",
        }}
      >
        {heading}
      </h1>
    </div>
  );
}
