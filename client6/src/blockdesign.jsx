const quote1={
    text:"one of my most productive days was throwing away 1000 lines of code.",
    author:"Ken Thomson",
    bio:"Designer of unix operation system",
}
const quote2={
    text:"A ship in port is safe, but that not what it is not build for.",
    author:"Adminral grace hopper",
    bio:"Inventor of programming compiler",
}
const quote3={
    text:"If you optimize is everthing, you will always be unhappy",
    author:"Donald knuth",
    bio:"pioneer of algorithm analysis",
}

const App=()=>{
    return(
        <div>
            <div className="flex flex-col border border-slate-400 m-4">
                 <div className="bg-cyan-400 p-4 text-center ">
                           {quote1.text}  {/*acessing text varable data from quote1 object */}
                 </div>
                  <div className="bg-slate-300 p-4 flex flex-col items-center text-2xl text-cyan-400">
                            {quote1.author}
                  </div>
                  <div className="bg-slate-300 p-4 flex flex-col items-center text-slate-200">
                             {quote1.bio}
                  </div>
            </div>

            <div className="flex m-9 justify-center">
            <div className="border border-slate-200 rounded-l-full text-center flex flex-col justify-center w-81 bg-slate-200 p-4">
                            {quote2.text}  {/*acessing text varable data from quote1 object */}
           </div>
           <div className="flex flex-col border border-slate-200 m4 w-64 rounded-br-lg rounded-tr-lg bg-2 bg-blue-400 p-4 ">
            <div className="flex flex-col items-center text-3xl">
                            {quote2.author}
           </div>
           <div className="flex flex-col items-center text-blue-200 m-2">
                             {quote2.bio}
           </div>
           </div>
            </div>

{/* to maximise the speed to create any ui component do the following;- 

1-step:- box everything up with use of the border
2-step:- fill the background color
3-step:- use width to adjust the width and the content width which is present in it. 
4-step:- use padding to make the space between the content and the border. 
5-step;- use the margins to make space between the components.
 */}
            <div className="flex flex-col">
                  <div className=" border border-pink-400 bg-pink-300 text-white text-2xl p-4 text-center ">
                    {quote3.text}  {/*acessing text varable data from quote1 object */}
                   </div>
              
              <div className="w-48 bg-pink-400 border-2 border-red-300 ">
                   <div className="text-red text-2xl">
                    {quote3.author}
                    </div>

                   <div className="text-pink-200 ">
                    {quote3.bio}
                   </div>

              </div>
              
            </div>

        </div>
        
    )
}
export default App;
