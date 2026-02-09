// components or the funtions help us write the code once and repeat them endlessly
//note:- always the App function will run,as that is bieng imported and created as root

//why:- create an intro function to introduce myself 
//where:- before app function
//what:- a function with return key word to transfer the output from the function

const Intro = () => {
// the return tag will consist of the empty tags which are of HTMl
    return(
        <>
           <h1 className="text-2xl italic">
            my name is AAQ, i am just starting to learn react, this is my 1st react program, 
            the journey of 1000s miles start with small steps. 
           </h1>
        </>
    )
}

const Age= () => {
    return (
       <>
           <h1 className="text-2xl itallic">
            22
           </h1>
       </>
    )
}


const App = () => {
    return(
        <>
        <h1 className="text-3xl font-bold underline">
            Hellow world
        </h1>
        {/* to call the function, we are just going to declare it in a slef closed tag of with its name
        and always make sure to keep the name of the component and tag start with the capital letter. */}
        <Intro/> 
        <Age/>
        </>
    )
}
export default App 