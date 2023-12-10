import React from "react";

import {CgWorkAlt} from "react-icons/cg";


import url from "@/public/Screenshot from 2023-12-07 09-23-03.png";
import blog from "@/public/kjjsbd.png";
import lms from "@/public/Screenshot from 2023-12-07 09-23-36.png";
import pokedex from "@/public/Screenshot from 2023-12-07 09-27-10.png";

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
        name:"Contact",
        hash: "#contact"
    },
    {
        name:"Skills",
        hash: "#skills"
    },
    {
        name:"Experience",
        hash: "#experience"
    }
] as const;


export const projects = [
    {
        title : "LinkShort - URL Shortener",
        description : "LinkShort is a URL Shortener made with MERN Stack ,redux and TailwindCSS. User can login, register , shorten a long URL,generate a unique QR code, make custom short URL, see the previous shortened URL,no. of clicks in the shortened Url ,can  make their own custom URl, and can delete the URL.   ",
        tags: ["React", "Node", "Express", "MongoDB", "TailwindCSS" , "JavaScript" , "Redux"],
        imageUrl : url, 
        liveLink:  "https://linkshort-frontend.vercel.app/",
        githubLinkFrontend: "", 
        githubLinkBackend: ""
    }, {
        title : "Brand - Blog App",
        description : "A blog app built with JavaScript, Node, Express and MongoDB. User can create a new blog. User can also see the details of the blog. User can also see the number of likes and comments on the blog. User can also update the profile picture and the name.",
        tags: ["HTML" , "CSS", "Node", "Express", "MongoDB",  "JavaScript"],
        imageUrl : blog, 
        liveLink:  "https://linkshort-frontend.vercel.app/",
        githubLinkFrontend: "", 
        githubLinkBackend: ""

    }, {
        title : "LMS - Learning  Management System",
        description : "",
        tags: ["React", "Node", "Express", "MongoDB", "TailwindCSS" , "Nodemailer" ],
        imageUrl : lms, 
        liveLink:  "https://linkshort-frontend.vercel.app/",
        githubLinkFrontend: "", 
        githubLinkBackend: ""
    }, {
        title : "Pokedex",
        description : "A Pokedex built with React, Node, Express and MongoDB. User can create a new book, update the existing book and delete the book. User can also see the details of the book. User can also see the number of likes and comments on the book.",
        tags: ["React", "Node", "Express", "MongoDB", "TailwinfdCSS" , "JavaScript"],
        imageUrl : pokedex,
        liveLink:  "https://linkshort-frontend.vercel.app/",
        githubLinkFrontend: "", 
        githubLinkBackend: ""
    }
] as const; 


