import { useState } from "react"


const Three=({handleClick})=>{
    return(
        <div>
            <div
            onClick={handleClick} 
            className="border-2 border-black flex  justify-center bg-yellow-500 text-white rounded-full px-3 m-3 cursor-pointer hover:underline underline-offset-2 ">
             three
            </div>
        </div>
    )
}
export default Three