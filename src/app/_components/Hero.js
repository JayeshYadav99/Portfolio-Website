"use client"
import { useState } from "react"
import Link from "next/link"
import Container from "./Container"
import Image from "next/image"

const Hero = ({data}) => {


const{title,description,cta_button_text,picture,cta_button_link}=data;
    return (
        <Container className="flex flex-wrap pt-28 pb-18">
        <div className="flex items-center w-full lg:w-1/2 lg:px-10">
          <div className="max-w-2xl mb-8 pr-3">
            <h1 className="text-4xl font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight text-white">
              {title}
            </h1>
            <p className="py-5 text-xl leading-normal lg:text-xl xl:text-2xl text-gray-300">
              {description}
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href={cta_button_link}
                className="px-7 py-3 text-white text-xl bg-indigo-600 rounded-md"
              >
                {cta_button_text}
              </Link>
            </div>
          </div>
        </div>

          {/* <Image
            src={picture.filename}
            width="529"
            height="529"
            className={"object-cover rounded-full hidden lg:inline"}
            alt="Tuomo Kankaanpää"
            loading="eager"
          /> */}
          <ProfileWithTooltip picture={picture} />
        
      </Container>
    )
  }

  const ProfileWithTooltip = ({ picture }) => {
    const [isTooltipVisible, setTooltipVisible] = useState(false);
  
    return (
      <div >
        <div
          className="flex items-center justify-center"
          onMouseEnter={(e) => setTooltipVisible(true)}
          onMouseLeave={(e) => setTooltipVisible(false)}
        >
          <Image
            src={picture.filename}
            width="529"
            height="529"
            className="object-cover rounded-full lg:inline"
            alt="Tuomo Kankaanpää"
            loading="eager"
          />
        </div>
  
        {isTooltipVisible && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded-md">
            <p className="mb-1">Name:    <strong>Jayesh Yadav</strong></p>
            <p className="mb-1">Currently:     <h4>Pursuing Btech(CSE) in KPGU </h4></p>

          </div>
        )}

      </div>
    );
  };
  
 
  export default Hero