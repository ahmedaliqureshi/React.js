const One=({handleClick})=>{
    return(
        <div
        onClick={handleClick} 
        className=" flex justify-center items-center bg-blue-700 text-white cursor-pointer hover:bg-blue-400 px-10 py-3 rounded-full">
            one
        </div>
    )
}
export default One;