const Home=()=>{
    return(
        <div className="bg-[#000000] h-screen flex flex-col justify-center items-center">
        <div className="mb-13 flex flex-col justify-center items-center">
               <span className="text-white text-7xl mb-8">
                Google
               </span>
               <div className="text-white flex items-center w-[600px]  px-4 py-2 shadow-md rounded-full bg-white ">
                <span className=" flex-1 flex items-center text-gray-500 ">
                   <i className="ri-search-line text-sm mr-3"></i>  Search Gooogle or type a URL
                </span>
                <span>
                    <span className="flex items-center gap-3">
                   <i className="ri-mic-fill text-black  cursor-pointer text-xl"></i>
                   <i className="ri-camera-line text-black cursor-pointer text-xl"></i>
                    <span className="text-black rounded-full cursor-pointer bg-gray-100">
                       <i className="ri-sparkling-2-line text-black m-2"></i>
                       <span className="mr-2">
                        AI Mode
                       </span>
                    </span>
                    </span>
                </span>
               </div>
        </div>
        </div>
    )
}
export default Home;