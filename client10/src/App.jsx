import Search from "../src/Search.jsx";
import Phone from "../src/Phone.jsx"
import Macbook from "../src/Macbook.jsx";
import Pad from "../src/Pad.jsx";
import Mac from "../src/Mac.jsx";
import Watch from "../src/Watch.jsx";
import Airpod from "../src/Airpod.jsx";
import Appletv from "../src/Appletv.jsx";
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
            <div className="border-3 border-white/30 ml-4 mr-1 h-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-auto">

            {/*phone block */}
               <div className="border-4 m-2 
               border border-white/20
               shadow-2xl
               rounded-md
               cursor-pointer
               hover:backdrop-blur-sm 
               hover:text-white transition-colors duration-200
               bg-gradient-to-b from-white/10 to-transparent">
                  <div className="flex justify-center items-center mr-2 ml-2 h-77 mt-30 mb-24">
                   <Phone/>
                  </div>
                   <div className="text-center">
                            <h2 className="text-white text-xl font-semibold mb-2">iPhone 16 Pro</h2>
                            <p className="text-white text-sm">Magicotronic</p>
                        </div>
               </div>
               
               {/*Macbook block*/}
               <div className="border-4 m-2  
               border border-white/20
               shadow-2xl
               rounded-md
               cursor-pointer
               hover:backdrop-blur-sm 
               hover:text-white transition-colors duration-200
               bg-gradient-to-b from-white/10 to-transparent ">
                <div className="flex justify-center items-center mr-2 ml-2 mt-30 mb-28">
                   <Macbook/>
                  </div>
                   <div className="text-center">
                            <h2 className="text-white text-xl font-semibold mb-2">Macbook Pro 14 </h2>
                            <p className="text-white text-sm">Powered by M5 chips</p>
                        </div>
               </div>
               
               {/*Mac block */}
               <div className="border-4 m-2 w-full
               border border-white/20
               shadow-2xl
               rounded-md
               cursor-pointer
               hover:backdrop-blur-sm 
               hover:text-white transition-colors duration-200
               bg-gradient-to-b from-white/10 to-transparent">
                <div className="flex justify-center items-center mr-2 ml-2 mt-30 mb-65">
                   <Mac/>
                  </div>
                   <div className="text-center">
                            <h2 className="text-white text-xl font-semibold mb-2">Mac studio </h2>
                            <p className="text-white text-sm">Powered by M4</p>
                        </div>
               </div>
                
                {/*ipad block */}
               <div className="border-4 m-2 w-full
               border border-white/20
               shadow-2xl
               rounded-md
               cursor-pointer
               hover:backdrop-blur-sm 
               hover:text-white transition-colors duration-200
               bg-gradient-to-b from-white/10 to-transparent">
                <div className="flex justify-center items-center mr-2 ml-2 mt-20 mb-40">
                   <Pad/>
                  </div>
                   <div className="text-center">
                            <h2 className="text-white text-xl font-semibold mb-2">iPad Pro</h2>
                            <p className="text-white text-sm">Supercharged with M4 chips</p>
                        </div>
               </div>
                
                {/*Watch block */}
               <div className="border-4 m-2 w-full
               border border-white/20
               shadow-2xl
               rounded-md
               cursor-pointer
               hover:backdrop-blur-sm 
               hover:text-white transition-colors duration-200
               bg-gradient-to-b from-white/10 to-transparent">
                 <div className="flex justify-center items-center mr-2 ml-2 mt-40 mb-95">
                   <Watch/>
                  </div>
                   <div className="text-center">
                            <h2 className="text-white text-xl font-semibold mb-2">Apple watches</h2>
                            <p className="text-white text-sm">The ultimate watch for healthy life</p>
                        </div>
               </div>

               {/*Airpods block */}
               <div className="border-4 m-2 w-full
               border border-white/20
               shadow-2xl
               rounded-md
               cursor-pointer
               hover:backdrop-blur-sm 
               hover:text-white transition-colors duration-200
               bg-gradient-to-b from-white/10 to-transparent">
                 <div className="flex justify-center items-center border- mr-2 ml-2 mt-40 mb-55">
                   <Airpod/>
                  </div>
                   <div className="text-center">
                            <h2 className="text-white text-xl font-semibold mb-2">AirPod Pro 2 </h2>
                            <p className="text-white text-sm">with active noise cancellation</p>
                        </div>
               </div>
            </div>
        </div>
    )
}

export default App;