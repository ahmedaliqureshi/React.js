import Iphone from "../src/assets/Iphones.png"

const Phone=()=>{
    return(
      <div className="w-full h-screen">
                     <img
                     src={Iphone} 
                     alt="Iphones"
                     className="w-full h-full object-cover"/>
                 </div>
    )
}

export default Phone;