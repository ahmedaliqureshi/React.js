const App=()=>{
    return(
    <div>
    <button className="cursor-pointer border-2 border-green-600 text-green-500 px-8 py-2 m-5 rounded-md">
        first
    </button>
    <button className="cursor-pointer bg-blue-400 border-blue-600 text-white-500 px-20 py-2 m-5 rounded-md">
        second
    </button>
    <button className="cursor-pointer bg-red-400 text-red-100 px-10 py-2 m-5 rounded-full">
        third
    </button>
    <button className="cursor-pointer bg-stone-400 text-white px-10 py-2 m-5 rounded-md hover:bg-stone-200 text-black">
        fourth
    </button>
    </div>
    )
}
export default App