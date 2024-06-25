import { useRef, useState, useSyncExternalStore } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ResizeObserve } from './components/resize-observe'

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

  const cbr = useRef(cb)

  return useSyncExternalStore(sub,cbr.current, ()=>false);
}

const sub = (cb) => {
  window.addEventListener("resize", cb);
  return () => {
    window.removeEventListener("resize", cb);
  };
}

function App() {
  const [count, setCount] = useState(0)
  useWindowResize(()=>{
    console.log("-=------------------")
    return false
  })

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ResizeObserve />
    </>
  )
}

export default App
