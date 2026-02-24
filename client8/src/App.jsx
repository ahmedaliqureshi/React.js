import One from "./One"
import Two from "./Two"
import Three from "./Three"
import { useState } from "react"

const App=()=>{
    const [message,setMessage]= useState("hello")
    return(
        <div className="">
            <div className="text-3xl font-medium flex justify-center items-center">
              {message}
            </div>
            <div className="flex justify-center items-center gap-3 h-screen">
            <One handleClick={()=>setMessage("you clicked on button one")}/>
            <Two handleClick={()=>setMessage("you clicked on button two")}/>
            <Three handleClick={()=>setMessage("you clicked on button three")}/>
            </div>
        </div>
    ) 
}
export default App