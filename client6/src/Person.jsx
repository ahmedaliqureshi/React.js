const Person=(props)=>{  //declaring the props as argument, which is inside of Person function
    const {name,gmail,phoneno}=props; // storing the data in the props
    return(
        // make sure to have parent tag to store all the children tag
       <>
       <name className="text-2xl italic bg-blue-500 ">    
        {name};
       </name>
       <gmail className="text-2xl italic bg-blue-500">
        {gmail};
       </gmail>
       <phoneno className="text-2xl italic bg-blue-500">
        {phoneno};
       </phoneno>
       </>
    )
}
export default Person