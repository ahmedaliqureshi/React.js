/**
 * why:- to use express features
 * where:- at start of file
 * what:-import and express keyword
 * constriant:- need to write more lines of code with out it
 */
import express from "express"; 
/**
 * why;- operation to be performed on the user schema
 * where:-at start of file
 * what:-using import and userModel keyword
 * constriant:- without it user account cannot be created or deleted or any data to be stored
 */
import userModel from "../models/Users.js";

/**
 * why:- storing the routing of express in a variable called router and using it
 * where:- at start of file
 * what:-it maps the variable and data
 * constraint:- without it code readiblity decreases 
 */
const router= express.Router();

/**
 * why:-creating the user is the 1st step to collect there data
 * where:- at start of file
 * what:-creating a try catch block
 * constraint:-with out it user details won't be stord in DB
 */
router.post("/signup",async (req,res)=>{
    try{
        /**
         * why:- making an object datatype format for user data
         * where:- in try block
         * what:-creating a user metadata fromat to be filled by the user
         * constriant:-without it there is not standard of what data be collected first
         */
        let{fullName,email,phone,age,password}= req.body; //

        console.log("1. Data recive:",req.body)

        // creating a varibale in which we will use userModel scheme to create the user

        const newUser= await userModel.create({
            fullName,
            email,
            phone, 
            age, 
            password
        });

        console.log("2. Data result:",newUser)

        res.status(200).json({msg:"account is created",user:newUser})

    }
    catch(error)
    {
         console.log("3. ERROR HAPPENED:", error); 
        console.log(error.message);
        console.log(error.name);
        res.status(500).json({msg:"account was not created"});
    }
})


export default router; 