import Search from "../src/Search";
import Phone from "../src/Phone"
import Categories from "../src/Categories";
import Applebg2 from "../src/assets/Applebg2.png";

const App=()=>{
    return(
        <div>
             <link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet"/>
            <div className="fixed absolute top-0 w-full bg-black/90 backdrop-blur-mid  text-gray-400 flex justify-around  cursor-pointer h-[44px] text-[15px] z-50">
             <div className="">
                <div className="hover:text-white transition-colors duration-300">
                    <i className="ri-apple-fill"></i>
                </div>
             </div>
             <div className=" hover:text-white transition-colors duration-300">
                Store
             </div>
             <div className=" hover:text-white transition-colors duration-300">
                Mac
             </div>
             <div className=" hover:text-white transition-colors duration-300">
                iPad
             </div>
             <div className=" hover:text-white transition-colors duration-300">
                iPhone
             </div>
             <div className=" hover:text-white transition-colors duration-300">
                Watch
             </div>
             <div className=" hover:text-white transition-colors duration-300">
                AirPods
             </div>
             <div className=" hover:text-white transition-colors duration-300">
                Tv & Home
             </div>
             <div className=" hover:text-white transition-colors duration-300">
                Entertainment
             </div>
             <div className=" hover:text-white transition-colors duration-300">
                Accessories
             </div>
             <div className=" hover:text-white transition-colors duration-300">
                Support
             </div>
             <div className=" hover:text-white transition-colors duration-300">
                <i className="ri-search-line text-[14px]"></i>
             </div>
             <div className=" hover:text-white transition-colors duration-300">
                <i className="ri-shopping-bag-line text-[15px]"></i>
             </div>
            </div>
            <div>
            </div>
            <div className="relative w-full min-h-screen">
               <div className="fixed inset-0 -z-10">  {/*-z-10 forces the background on everything */}
                <img
                src={Applebg2} 
                alt="Applebg2"
                className="w-full h-full object-cover"/>
            </div>
            </div>
            <div className="flex justify-center items-center mb-45">
            <Search/>
            </div>
            {/* The box that contian all the products */}
            <div className="border-3 border-white/30 ml-4 mr-1 h-screen mt-15 flex justify-between">
               <div className="border-4 m-2 w-70 flex justify-center items-center
               border border-white/20
               shadow-2xl
               rounded-md
               cursor-pointer
               hover:backdrop-blur-sm 
               hover:text-white transition-colors duration-200
               bg-gradient-to-b from-white/10 to-transparent">
                  <div className="flex justify-center items-center border-2 w-50 ">
                   <Phone/>
                  </div>
               </div>

               <div className="border-4 m-2 w-70  
               border border-white/20
               shadow-2xl
               rounded-md
               cursor-pointer
               hover:backdrop-blur-sm 
               hover:text-white transition-colors duration-200
               bg-gradient-to-b from-white/10 to-transparent ">

               </div>

               <div className="border-4 m-2 w-70
               border border-white/20
               shadow-2xl
               rounded-md
               cursor-pointer
               hover:backdrop-blur-sm 
               hover:text-white transition-colors duration-200
               bg-gradient-to-b from-white/10 to-transparent">

               </div>
               
            </div>
        </div>
    )
}

export default App;