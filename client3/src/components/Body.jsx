import React from "react"; 
import Card from "./Card";

const Body=()=>{
    return(
        <>
        <div className="body">
                <div className="p-[10px] m-10">search </div>
                <div className="flex flex-wrap m-2 p-2 gap-4 ">

                    <Card bgcolor="#f1e505" resname="17 Degree" menu="coffe, browines, " star="5.stars" duration="17 minitue" />
                    <Card bgcolor="#f1e505" resname="17 Degree" menu="coffe, browines, " star="5.stars" duration="17 minitue" />
                    <Card bgcolor="#f1e505" resname="17 Degree" menu="coffe, browines, " star="5.stars" duration="17 minitue" />
                    <Card bgcolor="#f1e505" resname="17 Degree" menu="coffe, browines, " star="5.stars" duration="17 minitue" />
                    <Card bgcolor="#f1e505" resname="17 Degree" menu="coffe, browines, " star="5.stars" duration="17 minitue" />


                </div>
            </div>
        </>
    )
}

export default Body