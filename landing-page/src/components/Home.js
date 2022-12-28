import HeroSection from "./HeroSection";
import React from 'react'
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import ProjectsSection from "./ProjectsSection";

function Home() {
  return (
    <>
        <HeroSection />
        <AboutSection style = {{'marginTop': '100em'}}id = 'aboutSection'/>
        <ProjectsSection />
        <ServicesSection />
    
    </>
  )
}

export default Home