// import Githubicon from "../src/assets/Githubicon.png"
import Cat from "./Cat.jsx"
const App =()=>{
    return(
      <div>
        <div className="border-3 border-blue-400 mt-8 p-2 flex justify-center">
            <Cat/>
            <Cat/>
            <Cat/>
        </div>
        <div className="border-3 border-green-400 mt-8 p-2 flex justify-end">
            <Cat/>
            <Cat/>
            <Cat/>
        </div>
        <div className="border-3 border-red-400 mt-8 p-2 flex justify-start">
            <Cat/>
            <Cat/>
            <Cat/>
        </div>
        <div className="border-3 border-orange-400 mt-8 p-2 flex justify-between">
            <Cat/>
            <Cat/>
            <Cat/>
        </div>
          <div className="border-3 border-purple-400 mt-8 p-2 flex justify-around">
            <Cat/>
            <Cat/>
            <Cat/>
        </div>
      </div>
    )
}
export default App 