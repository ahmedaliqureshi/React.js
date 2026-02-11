const Fancybutton=(props)=>{  
/*
constraint:- the label present in app.jsx is not taken but from the functioncutton
solution:- to tackle this we will use the props method]
why;- the props method has a build in feature where it takes tag name and uses it to modify the lable of the buttion. 
where;- after functionbutton declararion
what;- props is a key word use to store data and retrive it.
 */
/*
constraint:- the problem is once the button are build, they are cannot be changed based. 
solution:- to tackle this we will use another varibale with in the props, to manuplulate the size or roudness of the button
why:- we need a another varibale to store the data of the size and roundes. 
where:- the varibale will be declared with in the list of variables of the props. 
what:- a variabels known as larage will store and manuplate the size of button
 */
const {children,large}=props;  //note to pass the props as argument in function as well
/*
why;- to manuplate the size of button 
where:- condition to be large and more rounded will be declared right after the props 
what:- using a 2 variable to determine the size and roundess of the button
 */
const largestyle= large ? "text-3xl rounded-full":"text-base rounded-md"; // if large is true then make the text of button 3xl or else keep it base
    return(
        <button className={`cursor-pointer border-4 border-blue-300 bg-blue-500 px-3 py-4 m-4 ${largestyle}`}> {/*make sure that largestyle is declared with in the backtics to use the value of it */}
           {children}
        </button>
    )
}
export default Fancybutton