import React from "react";
import url from "@/public/Screenshot from 2023-12-07 09-23-03.png";
import blog from "@/public/kjjsbd.png";
import communet from "@/public/communet.png";

import lms from "@/public/Screenshot from 2023-12-07 09-23-36.png";
import pokedex from "@/public/Screenshot from 2023-12-07 09-27-10.png";
import { BsGoogle, BsMicrosoft, BsPaintBucket } from "react-icons/bs";
import Image from "next/image";

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
        title : "Communet - Bulk Email Sender and Extractor",
        description : "I have Contribution in Chrome Extension and Backend which is a Microservices based Server build using Nodejs and Deployed on Amazon EC2 instance.",
        tags: ["Microservices", "Node", "Express", "MongoDB", "TypeScript" , "Docker" , "Chrome Extension"],
        imageUrl : communet, 
        liveLink:  "https://commu-net.vercel.app/",
        githubLinkFrontend: "https://github.com/Commu-net/", 
        githubLinkBackend: "https://github.com/Commu-net/"
    }, 
   

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
       description : "LMS is built using MERN Stack. Integrated Razorapay payment gateway. Designed a ADMIN Dashboard for the analytics using Chart.js. Implemented nodemailer for password recovery. Utilized multer for image upload and cloudinary for data storage. ",
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
        description : "Pokedex is a index of Pokemons built using React and TailwindCSS. Implemented debouncing for reducing no. of API Calls and used Context API for state management.",
        tags: ["React", "Node", "Express", "MongoDB", "TailwindCSS" , "JavaScript"],
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
    "Docker", 
    "Zustand",
    "Amazon SQS" ,
    "Amazon Lambda" ,
    "Styled Commponents", 
    "Amazon ECS"


] as const



export const experienceData = [
    {

        title :"Full Stack Developer at DevTown" ,
        location : "Remote" ,
        description : "Worked on making the new Student Platform(frontend) using React and Code Runner using Docker, Amazon SQS, Amazon Lambda. " ,
        icon : React.createElement(Image, {src : "/public/devt.jpeg" ,alt:"devtoewn" ,width:"24" , height:"24"}), 
        date  : "2024"
    },
    {
            
        title :"Winner of Quine Track in Hack Odisha" ,
        location : "Remote" ,
        description : "Got the first rank in Quine Track among the 100+ participating Teams" ,
        icon : React.createElement(BsMicrosoft), 
        date  : "2023"
    },
] as const;

