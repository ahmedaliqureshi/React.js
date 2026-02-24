import { useState } from "react"


const Two=({handleClick})=>{
    return(
        <div>
            <div
             onClick={handleClick}
             className="border-2 border-black flex justify-center bg-green-500 text-white rounded-full px-3 m-3 cursor-pointer hover:underline underline-offset-2 ">
             two
            </div>
        </div>
    )
}
export default Two;