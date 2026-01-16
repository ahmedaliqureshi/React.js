import { useState } from 'react';
import React from 'react'

const App=()=>{
    const [age,setAge]=useState(20);
    const [hobbies,sethobbies]=useState(["GYM","CODING"]);
    const fullName="ahmed";

    function addAge() {
        setAge(age+1);
    }
     function subAge() {
        setAge(age-1);
    }


    return(
        <>
        <h1>my details</h1>
        <p>fullName: {fullName}</p>
        <p>age: {age}</p>
        <p>age critory: {age>=18?"adult":"minor"}</p>
        <p>Hobbies:{hobbies}</p>
        {age>=55 && <p>senior citizen</p>}

         {
            hobbies.map((x,i)=>
            (

                <p key={i}>{x}</p>
            )
            )
         }
        <button
        onClick={addAge}
        className="bg-blue-500 text-white text-center p2 m-2 rounded-border">click me to add</button>
        <button
        onClick={subAge}
        className="bg-blue-500 text-white text-center p2 m-2 rounded-border">click me to sub</button>
        </>
    )
}
export default App