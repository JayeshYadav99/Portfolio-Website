"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
interface PortfolioData {
  name: string;
  currentStatus: string;
  Nav_Section: any;
  Hero: any;
  Projects: any;
  Achievements: any;
  Contact: any;
}
interface PortfolioContentProps {
  portfolioData: PortfolioData;
  name: string;
  currentStatus: string;
}

const PortfolioContent = ({ portfolioData,name,currentStatus }: PortfolioContentProps) => {
  return (
    <>
      <Navbar data={portfolioData?.Nav_Section[0]} />
      <Hero
        data={portfolioData?.Hero[0]}
        name={name}
        currentStatus={currentStatus}
      />
      <Services data={portfolioData?.Projects[0]} />
      <Achievements />
      <section id="contact">
        <Contact data={portfolioData?.Contact[0]} />
      </section>
      <Footer />
    </>
  );
};

export default PortfolioContent;
