import Cat from "./Cat.jsx"
const App=()=>{
    return(
        <div>
        <div className="border-4 border-blue-200 p-2 m-4 flex flex-col item-center justify-between   ">
            <Cat/>
            <Cat/>
            <Cat/>     
        </div>
          <div className="border-4 border-orange-200 p-2 m-4  ">
            <Cat/>
            <Cat/>
            <Cat/>     
        </div>
        <div className="border-4 border-green-200 p-2 m-4  ">
            <Cat/>
            <Cat/>
            <Cat/>     
        </div>
        <div className="border-4 border-red-200 p-2 m-4  ">
            <Cat/>
            <Cat/>
            <Cat/>     
        </div>
        <div className="border-4 border-white-200 p-2 m-4  ">
            <Cat/>
            <Cat/>
            <Cat/>     
        </div>
          <div className="border-4 border-stone-200 p-2 m-4  ">
            <Cat/>
            <Cat/>
            <Cat/>     
        </div>
        </div>

    )
};

export default App;