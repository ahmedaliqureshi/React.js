import { useState } from "react"

const One=({handleClick})=>{
    return(
        <div>
            <div
            onClick={handleClick}
             className="border-2 border-black flex justify-center bg-blue-500 text-white rounded-full px-3 m-3 cursor-pointer  hover:underline underline-offset-2 ">
             one
            </div>
        </div>
    )
}
export default One