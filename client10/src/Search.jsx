const Search=()=>{
    return(
        <div className="
        absolute bottom-0 w-200
        flex justify-center items-center 
        py-3               
        text-gray-100 text-xl font-light tracking-wide
        outline-none 
        border border-white/20
        shadow-2xl
        rounded-full
        cursor-pointer
        hover:backdrop-blur-sm 
        hover:text-white transition-colors duration-200
        bg-gradient-to-b from-white/10 to-transparent ">
            <div className="gap-3 flex-1  px-2">
              <i class="ri-search-line border rounded-full px-1 py-1"></i> search for the product
            </div>
        </div>
    )
}

export default Search;