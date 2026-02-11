/*why:- creating a function known as fancy button, so it can be used repeadly
where:- creating it in a seprate folder and then importing it in the App.jsx file and exporting it from fancybutton file
what:- A button function, that has multiple button function in it
constraint:- creating it so we can transfer it to main App file and redduce the over all cluter
*/
import Fancybutton from "./Fancybutton"
const App=()=>{
    return(
        <div>
        <Fancybutton>  {/*click and selectg me are the childeren here*/}
            click me
        </Fancybutton>   {/*we need to make one tag true to large and other false,this can be done simply by declaring the variable */}
        <Fancybutton large>
            select me
        </Fancybutton>
        </div>
    )
}
export default App