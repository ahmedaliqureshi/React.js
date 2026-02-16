import Sidebar from "./Sidebar.jsx"
import Page from "./Page.jsx"
const App=()=>{
    return(
        // 
        <div className="flex w-full h-screen overflow-hidden">
        <div>
            <Sidebar/>
            <link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet"/>
            <link href="https://cdn.jsdelivr.net/npm/remixicon@4.9.1/icons/Logos/grok-ai-line.svg"/>
        </div>
        <div className=" flex-1 bg-black border-stone-400">
            <Page/>
        </div>
         </div>
    )
}
export default App;