/**
 * why:- to store the user data in mongoose db
 * where;- at start of file
 * what:- using import and mongoose keyword
 * constraint:- without it the user data won't be stored
 */
import mongoose from "mongoose";
/**
 * why:- storing the format of user data
 * where:- at start fo the file. 
 * what:- using constent variable and shehema from mongoose
 */
const userSchema= new mongoose.Schema( //passing an jsop
    {
         fullName:{
            type:String, 
            requried:true, 
            trim:true
         },

         email:{
            type:String, 
            requried:true, 
            trim:true
         },

         phone:{
            type:String, 
            requried:true, 
            trim:true
         },

         age:{
            type:Number, 
            minlength:[18,"minimum age is 18"],
            maxlength:[80,"maximum age is 80"]
         },

         password:{
            type:String, 
            required:true
         }
    },

    {
        timestamps:true,  //this makes an entery in db to show when the account was created
    }
)
/**
 * why:- storing the whole json file structure in a db 
 * where:-at end of file
 * what:-using model method to create the model 
 * constriant:- without it the model won't be created
 */
const userModel=mongoose.model("users",userSchema);

export default userModel;