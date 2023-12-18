"use server";
import ContactFromEmail from "@/email/ContactFromEmail";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData : FormData) => {
    console.log("Running on server ") ; 
    const message = formData.get("message") ;
    const email = formData.get("email") ;
    console.log(message , email) ;
    if(!message  ||     typeof message !== "string" || typeof email !== "string" ||  !email) return {error : "Invalid Messagee"}
    console.log("Sending email") ;  
    try {
        await resend.emails.send({
            from :"Portfolio ka message <onboarding@resend.dev>" ,
            to : "ayushvish6555@gmail.com", 
            subject : "Portfolio ka message aaya h from  " + email ,
            
            reply_to : email, 
            react : React.createElement(ContactFromEmail , {message , email})
    
        })
        
    } catch (error : any ) {
        if(error instanceof Error) {

            return {error : error.message}
        }else {
            return {error : "Unknown error"}
        }
        
    }
}