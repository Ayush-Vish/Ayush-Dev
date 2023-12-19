import React from "react";

import {CgWorkAlt} from "react-icons/cg";


import url from "@/public/Screenshot from 2023-12-07 09-23-03.png";
import blog from "@/public/kjjsbd.png";
import lms from "@/public/Screenshot from 2023-12-07 09-23-36.png";
import pokedex from "@/public/Screenshot from 2023-12-07 09-27-10.png";
import { BsGoogle, BsMicrosoft, BsPaintBucket } from "react-icons/bs";

export const links = [
    {
        name:"Home",
        hash: "#home"
    },
    {
        name:"About",
        hash: "#about"
    },
    {
        name:"Projects",
        hash: "#projects"
    },
    {
        name:"Skills",
        hash: "#skills"
    },
    {
        name:"Experience",
        hash: "#experience"
    },
    {
        name:"Contact",
        hash: "#contact"
    }
] as const;


export const projects = [
    {
        title : "LinkShort - URL Shortener",
        description : "LinkShort is a URL Shortener made with MERN Stack ,redux and TailwindCSS. User can login, register , shorten a long URL,generate a unique QR code, make custom short URL, see the previous shortened URL,no. of clicks in the shortened Url ,can  make their own custom URl, and can delete the URL.   ",
        tags: ["React", "Node", "Express", "MongoDB", "TailwindCSS" , "JavaScript" , "Redux"],
        imageUrl : url, 
        liveLink:  "https://linkshort-bay.vercel.app/",
        githubLinkFrontend: "https://github.com/Ayush-Vish/linkShort", 
        githubLinkBackend: "https://github.com/Ayush-Vish/url-SHORTENER/"
    }, 
    {
       title : "LMS - Learning  Management System",
       description : "",
       tags: ["React", "Node", "Express", "MongoDB", "TailwindCSS" , "Nodemailer" ],
       imageUrl : lms, 
       liveLink:  "https://lms-frontend-opal.vercel.app/",
       githubLinkFrontend: "https://github.com/Ayush-Vish/lms-frontend", 
       githubLinkBackend: "https://github.com/ayush-Vish/lms-server"
   },
    {
        title : "Brand - Blog App",
        description : "A blog app built with JavaScript, Node, Express and MongoDB. User can create a new blog. User can also see the details of the blog. User can also see the number of likes and comments on the blog. User can also update the profile picture and the name.",
        tags: ["HTML" , "CSS", "Node", "Express", "MongoDB",  "JavaScript"],
        imageUrl : blog, 
        liveLink:  "https://rituraj12797.github.io/FRONTEND/",
        githubLinkFrontend: "https://github.com/rituraj12797/FRONTEND", 
        githubLinkBackend: "https://github.com/Ayush-Vish/dep"

    },
     {
        title : "Pokedex",
        description : "A Pokedex built with React, Node, Express and MongoDB. User can create a new book, update the existing book and delete the book. User can also see the details of the book. User can also see the number of likes and comments on the book.",
        tags: ["React", "Node", "Express", "MongoDB", "TailwinfdCSS" , "JavaScript"],
        imageUrl : pokedex,
        liveLink:  "https://hilarious-caramel-5bd052.netlify.app/",
        githubLinkFrontend: "https://github.com/Ayush-Vish/pokedex-react/", 
        githubLinkBackend: "https://github.com/Ayush-Vish/pokedex-react/"
    }
] as const; 




export const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "Express",
    "MongoDB",
    "TailwindCSS",
    "Redux",
    "Nodemailer",
    "Git",
    "GitHub",
    "VSCode",
    "Figma",
    "PostgreSQl",
    "C",
    "C++",
    "NextJS",
    "TypeScript",
    "Postman",
    "Framer Motion",
    "Material UI",
    "Bootstrap",
    "Docker"


] as const


export const experienceData = [
    {

        title :"Software Developer at google" ,
        location : "Bengaluruuuu" ,
        description : "Making google Gemini an AI Based Human " ,
        icon : React.createElement(BsGoogle), 
        data  : "2027"
    },
    {
            
        title :"Software Developer at Microsoft" ,
        location : "Hyderabad" ,
        description : "Making google Gemini an AI Based Human " ,
        icon : React.createElement(BsMicrosoft), 
        data  : "2026"
    },
    {

        title :"Software Developer at Atlassian" ,
        location : "Noida" ,
        description : "Making google Gemini an AI Based Human " ,
        icon : React.createElement(BsPaintBucket), 
        data  : "2027"
    },
        
    

] as const;

