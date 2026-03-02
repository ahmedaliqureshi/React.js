import Search from "../src/Search";
import Phone from "../src/Phone"
import Applebg2 from "../src/assets/Applebg2.png";

const App=()=>{
    return(
        <div>
             <link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet"/>
            <div className=" absolute top-0 w-full  bg-black/90 backdrop-blur-mid  text-gray-400 flex justify-around  cursor-pointer h-[44px] text-[15px] z-10">
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
            <div className="w-full h-screen">
                <img
                src={Applebg2} 
                alt="Applebg2"
                className="w-full h-full object-cover"/>
            </div>
            <div className="flex justify-center items-center">
            <Search/>
            </div>
        </div>
    )
}

export default App;