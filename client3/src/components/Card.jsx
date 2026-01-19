import React from "react"; 

const Card=()=>{
    return(
        <>
       <div className="w-50 h-75 rounded-2xl text-center hover:border cursor-pointer">
        <img className="p-1.25 w-full rounded-2xl"src="src/components/resturantpic.jpg" alt="resturantpic.jpg"/>
        <h3 className="text-2xl font-bold text-center"></h3>
       </div>
        </>
    )
}

export default Card