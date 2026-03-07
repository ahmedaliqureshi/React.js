/*
why:- mongoose is an open source data base help in storing data. 
where:- at start of file. 
what:- use of import and mongoose. 
constraint:- not importing the mongoose we won't be able to connect databse
*/
import mongoose from "mongoose"; 

/*
why:-importing the DB connect string from dotenv file. 
where:-at start
what:- use of import to dotenv
constraint:- no connection will be formed if this is not done hence no transfer of data from backend
 */
import dotenv from "dotenv"; 

/*
why:- config helps running the imported library. 
where:- at start
what:-using config() aka function to run
constraint:-with out it the data will be imported buy never read, which will make the app crash
 */

dotenv.config(); 

/**
 * why:- a function to connect db. 
 * where:- at start of file. 
 * what:- async function, runs in background when it is executed. 
 * constriant:- with out it the whole website will lag and will be slow. 
 */

async function dbconnect(){
    /**
     * why;- try-catch block helps in running the program and catching if any errors comes
     * where:-at start of the async fucntion
     * what;-a try block, where computer tries to run the block of code and moves on, ir error rises, it comes in catch and show in terminal
     * constaint:- wiht out it finding errors and debegging will be difficult
     */
    try{
        const URI=process.env.DBURI;
        await mongoose.connect(URI);
    }
    catch(error){
       console.log(error);
       console.log(error.message); //helps in readiblity of the error
    }
}

dbconnect(); //calling the function to run the code

export default dbconnect.js;