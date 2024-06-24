import { act, renderHook } from "@testing-library/react";
import { useEffect, useState, useSyncExternalStore } from "react";

function useWindowResize(cb: () => boolean) {
  // const [show, setShow] = useState(cb)
  // useEffect(()=>{
  //   const c = ()=> setShow(cb)
  //   window.addEventListener("resize", c);
  //     return () => {
  //       window.removeEventListener("resize", c);
  //     };
  // },[])
  // return show


  return useSyncExternalStore(
    (cb) => {
      window.addEventListener("resize", cb);
      return () => {
        window.removeEventListener("resize", cb);
      };
    },
    cb,
    () => true
  );
}


describe("resize",()=>{
  it("should pass",()=>{
    const {result} = renderHook(()=> useWindowResize(() => window.innerWidth > 300))

    expect(result.current).toBe(true)
  })

  it("should call passed callback 3 times initially",()=>{
    const fn = vi.fn()
    renderHook(()=> useWindowResize(fn))
    expect(fn).toHaveBeenCalledTimes(3)
  })

  it("should pass expect on resize",()=>{
    window.innerWidth = 200
    const {result}=renderHook(()=> useWindowResize(()=> window.innerWidth > 400))
    expect(result.current).toBe(false)

    window.innerWidth = 500    
    act(()=>{
      window.dispatchEvent(new Event("resize"))  
    })
    expect(result.current).toBe(true)


    window.innerWidth = 300    
    act(()=>{
      window.dispatchEvent(new Event("resize"))  
    })
    expect(result.current).toBe(false)
  })
})
