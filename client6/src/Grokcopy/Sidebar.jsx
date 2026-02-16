const Sidebar=()=>{
    return(
       <div className="flex flex-col p-2 w-48 bg-[#000000] border-1 border-[#121212]">
         <div className="mb-5 flex item-center justify-center border rounded-full w-15 h-6 bg-[#0d0d0d] text-white">
          <span className="ri-grok-ai-line">GROK</span>
         </div>
         <div className="mb-3 mt-3  rounded-full w-38 bg-[#000000] text-white w-15 h-7 text-left cursor-pointer hover:bg-[#2f3336] ">
         <i className="ri-search-line px-2"></i> <span className="text-sm">Search</span>
         </div>
         <div className="mb-3 rounded-full w-38 bg-[#000000] text-white cursor-pointer hover:bg-[#2f3336]">
             <i className="ri-edit-box-line px-2"></i> <span className="text-sm">Chat</span>
         </div>
         <div className="mb-3 rounded-full w-38 bg-[#000000] text-white cursor-pointer hover:bg-[#2f3336]">
             <i className="ri-voiceprint-fill px-2"></i> <span className="text-sm">Voice</span>
         </div>
         <div className="mb-3  rounded-full w-38 bg-[#000000] text-white cursor-pointer hover:bg-[#2f3336]">
             <i className="ri-folder-2-line px-2"></i> <span className="text-sm">Project</span>
         </div>
         <div className="mb-3  rounded-full w-38 bg-[#000000] text-white cursor-pointer hover:bg-[#2f3336]">
             <i className="ri-image-line px-2"></i> <span className="text-sm">Image</span>
         </div>
         <div className="mt-1  rounded-full w-38 bg-[#000000] text-white cursor-pointer hover:bg-[#2f3336]">
          <i className="ri-history-line px-2"></i> <span className="text-sm">History </span>
         </div>
         <div className="mt-91  rounded-full w-8 h-6 bg-[#000000] text-center text-white cursor-pointer hover:bg-[#2f3336]">
             <i className="ri-user-3-line"></i><span></span>
         </div>
       </div>
    )
};

export default Sidebar