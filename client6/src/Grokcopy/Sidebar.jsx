const Sidebar=()=>{
    return(
       <div className="flex flex-col p-2 w-48 bg-[#000000]">
         <div className="mb-6 flex item-center justify-center border rounded-full w-15 h-6 bg-[#0d0d0d] text-white">
          GROK
         </div>
         <div className="mb-3 mt-3 border rounded-full w-38 bg-[#0d0d0d] text-white w-15 h-6 ">
           Search
         </div>
         <div className="mb-3 border rounded-full w-38 bg-[#0d0d0d] text-white">
            chat 
         </div>
         <div className="mb-3 border rounded-full w-38 bg-[#0d0d0d] text-white">
             voice 
         </div>
         <div className="mb-3 border rounded-full w-38 bg-[#0d0d0d] text-white">
             folder 
         </div>
         <div className="mb-3 border rounded-full w-38 bg-[#0d0d0d] text-white">
             image 
         </div>
         <div className="mt-3 border rounded-full w-38 bg-[#0d0d0d] text-white">
             recent 
         </div>
         <div className="mt-95 border rounded-full w-38 bg-[#0d0d0d] text-white">
             account 
         </div>
       </div>
    )
};

export default Sidebar