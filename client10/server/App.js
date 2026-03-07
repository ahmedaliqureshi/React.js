/*
why:- importing express because it has prebuild tools to build backend. 
where:- start of the file. 
what:-using import keyword with express to import express
constraint:- with out it the backend files will be way larger and complex
*/
import express from "express"; 

/*
why:- to protect the sensitive data and not leaking it. 
where:- at start of file
what:- using the import keyword and dotenv file, import data. 
constraint:- with out it, the chances of getting attacked or hacked rises
*/

import dotenv from "dotenv"; 

const PORT=process.env.PORT||5000; //processing the value of the port from the dotenv file or using 5000 just in case if load to fail
const app=express(); //using all the express feature and storing into a varibale known as app

/**
 * why:- importing all the apis from the index file so to increase the readiblity of the code. 
 * where:- at start of file. 
 * what:-using the import keyword
 */

import router from "../server/controllers/index.js"

/*
Note:- Make sure to write the DB connection file before hand.

why:- connection help us to transfer data to DB, to store and look at it later on. 
where:- at start of file
what:- import key word to import the data from the file. 
constraint:- with out it the track of users and there activity would be lost. 
 */

import dbconnect from "./utils/dbconnect.js";

/**
 * why:- helps in reading json format data. 
 * where;- at start
 * what:- using use keyword to acess express and use the json parsing freature
 * constriant;- with out it the expreess won't understand what is passing by. 
 */
app.use(express.json());

/**
 * why:- to test if the api are working or not
 * where:-in middle of file
 * what;- a function that uses get method and req and res as parameter which are passed as arraow function
 * constraint:- wihthout it there will be no transfer of data
 */
app.get("/",(req,res)=>{
    try{
       res.status(200).json({msg:"server is working"}) //200 are http request family category which shows the transfer of data was scuessful from clientside
    }
    catch(error)
    {
        console.log(error.message); 
        res.status(500).json({msg:error}) //500 are http request family category which shows the server is not reciving any data from clietnside
    }
});

/**
 * 
 */

app.use("/user",router);

/**
 * why:- this will listen to requets being send and recive
 * where:- at end of file
 * what:- listen is method to show server is running on a specific port
 * constriant:- it shows server is running or not, helps dev
 */
app.listen(PORT,()=>{
   console.log(`server is running on http://localhost:${PORT}`);
});


