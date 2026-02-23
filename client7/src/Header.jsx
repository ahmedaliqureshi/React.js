const Header=()=>{
    return(
         <div className="flex justify-end items-center bg-[#000000]">
           <span className=" text-white mr-3 cursor-pointer hover:underline underline-offset-1">
            Gmail
           </span>
           <span className=" text-white mr-3 cursor-pointer hover:underline underline-offset-1">
            Image
           </span>
           <span className=" rounded-full text-white mr-3 cursor-pointer hover:bg-[#2f3336]">
           <i className="ri-list-unordered text-2xl"></i>
           </span>
           <span className="border-2 rounded-full cursor-pointer hover:bg-[#2f3336]">
            <i className="ri-user-3-line m-1 text-white text-2xl"></i>
           </span>
         </div>
    ) 
}
export default Header