import React, { useEffect } from 'react'



//  Hook for Reset Scroll 
 
export const useScrollRest = ()=> {
    
    useEffect(()=>{

        window.scrollTo(0,0);

        return () => {
            window.scrollTo(0,0);
        }

    },[])
}


// Hook for check if anyone item hamper it will clear localStorage and redirect to login page 
export default function Hooks() {
    return (
    <></>
  )
}
