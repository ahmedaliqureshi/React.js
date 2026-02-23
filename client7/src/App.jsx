import Header from "./Header";
import Home from "./Home";

const App=()=>{
  return(
    <div className="">
     <div>
            <link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet"/>
            <Header/>
     </div>
     <div>
      <Home/>
     </div>

    </div>

  )
}
export default App;