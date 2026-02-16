const Main=()=>{
return(
    <div className="flex-1 flex flex-col justify-center items-center">
        <div className="text-white text-6xl font-bold tracking-widest mt-50">
            Grok
        </div>
        <div className="mt-10 w-300 max-w-5xl bg-[#121212] border-[#121212] py-5 rounded-full cursor-pointer flex">
              <span className="text-stone-500 px-5 cursor-blink ">what is on you're mind?</span>
              <span className=" flex justify-end  ml-190">
              <span className="flex justify-center text-4xl bg-white rounded-full w-11"><i className="ri-voiceprint-fill"></i></span>
              </span>
        </div>
    </div>
)
};
export default Main