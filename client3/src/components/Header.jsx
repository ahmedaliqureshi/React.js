import React from "react"
const Header=()=>{
    return(
 <>
    <div className="header">
        <div className="logo-container">
        <img className src="src/components/logo.png" alt="logo.png" />
        </div>
        <div>
    <ul class="flex space-x-4 p-2 h-24">
    <li class="m-22">
        <a href="#" class="block px-4 py-2 text-white-900 bg-yellow-500 hover:bg-gray-200 rounded-full">Home</a>
    </li>
    <li class="m-22">
        <a href="#" class="block px-4 py-2 text-white-900  bg-yellow-500 hover:bg-gray-200 rounded-full">About us</a>
    </li>
    <li class="m-22">
        <a href="#" class="block px-4 py-2 text-white-900  bg-yellow-500 hover:bg-gray-200 rounded-full">Contact us</a>
    </li>
    <li class="m-22">
        <a href="#" class="block px-4 py-2 text-white-900 bg-yellow-500 hover:bg-gray-200 rounded-full">Cart</a>
    </li>
   </ul>


        </div>
    </div>
</>

    )
}

export default Header;