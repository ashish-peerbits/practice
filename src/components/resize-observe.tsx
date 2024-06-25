import { useEffect } from "react";



export function ResizeObserve(){

    useEffect(()=>{
        const resizeObserver = new ResizeObserver((entries) => {
                console.log('resize running') 
        })
          
          resizeObserver.observe(document.body);
    },[])

    return (
        <h2>observe resize</h2>
    )
}
