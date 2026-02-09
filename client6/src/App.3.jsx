/*
why:- to store name
where:- before app fucntion 
what:- to store string data in it 
constraint;- it needed to be declared in constent so that data cannot be changed later on
*/

// const Name= ()=> {
//     let a = "AAQ";  
// }
//note:- forget to put the return and that why i did not get the data or the output

 const Name = (props) => {  //we passed and arguemnt here known as props, which is basically a varaible
    const{text,height,weight,nationality}=props; //then we store what ever constent data in props, and later on returning it
    return(
    <>
         {text}
         {height}
         {weight}
         {nationality}
    </>
    );
 };

const App= () => {
    return(
        <>
        {/* once the function is made, it is later on called in forms of self closed tags, and we can see
        here that the data of text is passed, just like how we use the to call that fucntion in JS*/}
        <Name 
        text="AAQ"
        height="5feet 6 inces" 
        weight="72 kg" 
        nationality="south asia/india" /> 
        </>
    )
}
export default App