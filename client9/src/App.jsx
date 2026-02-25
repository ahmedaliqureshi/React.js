import One from "./One";
import Two from "./Two";
import Three from "./Three"
import { useState } from "react";


const App=()=>{
  const [message,setMessage]= useState(false);
  return(
    <div>
      <div className="flex flex-col justify-center items-center h-screen gap-6">
        <div className=" p-5 bg-blue-100 rounded-3xl">
          <link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet"/>
          <div className="text-3xl text-blue-700 flex justify-center mb-2">
          { message ? <i className="ri-emotion-happy-line"></i> : null}
          </div>
        <One
        handleClick={()=>{
          setMessage(!message);
        }}
        />
        </div>
        <div className=" p-5 bg-red-100 rounded-3xl">
        <Two 
        handleClick={()=>{
          
          
        }}/>
        </div>
        <div className=" p-5 bg-green-100 rounded-3xl">
        <Three/>
        </div>
      </div>
    </div>
  )
}

export default App;