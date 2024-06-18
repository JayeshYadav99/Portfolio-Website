"use client"
import Image from "next/image";
import Container from "./Container";
import { FaLinkedin, FaGithub } from 'react-icons/fa';


import Link from "next/link";
const ContactSection = ({ data }:any) => {
  //   const { title, description, email, phone, location } = data;
  
  const{title,email,linkedinProfile,githubProfile}=data;
  return (
    <Container className="flex w-full flex-col my-16 items-center justify-center text-center">
      <div className="text-xl" id="contact">
        <h2 className="text-4xl font-bold text-center mb-8">{title}</h2>
      
        <span className="block mb-2">
          <EmailIcon /> {email}
        </span>
        {/* <span className="block mb-2">{githubProfile}</span> */}
        <Link href={`https://www.linkedin.com/in/${linkedinProfile}/`} className="block mb-2" >
          <FaLinkedin className="inline mr-2" />
          
       
            {linkedinProfile}
          
          </Link>
     
        <Link href={`https://github.com/${githubProfile}`} className="block mb-2" >
          <FaGithub className="inline mr-2" />
        

{githubProfile}
   
</Link>
      </div>
    </Container>
  );
};

export default ContactSection;

const EmailIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 inline mr-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
};


