/*
why:- a constent fucntion which has the constent objects 
where:- before the app funciton. 
what;- it is taking the vlaues of person, and styling it and passing to app fucntion
constraint;- in return, we need to pass doubel curly brackets, as the the react is implemented of JS and HTML
 */
import Person from "./Person.jsx"
const App = () =>{  
    return(
        // calling the person fucntion and passing the values of the varibles as they are
        /* the attributes of the objects should be declared as they are declared in in the above creation of object */
        <>
        <Person  
        name="AAQ"
        gmail="AAQ@gmail.com"
        phoneno="223344"/>
        <Person
        name="IBBU"
        gamil="ibbu@gamil.com"
        phoneno="321456"/>
        </>

    )
}
export default App