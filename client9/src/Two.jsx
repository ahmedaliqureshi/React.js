const Two=({handleClick,isOrange})=>{
    return(
        <div  onClick={handleClick} 
        className={`flex justify-center items-center text-white px-10 py-3 rounded-full cursor-pointer 
        ${isOrange ? "bg-orange-400" : "bg-red-500"}`}>
            two
        </div>
    )
}

export default Two;