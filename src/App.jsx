import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import { ScrollTrigger, ScrollSmoother } from 'gsap/all';
import gsap from 'gsap';
import MessageSection from './sections/MessageSection';
import FlavorSection from './sections/FlavorSection';
import { useGSAP } from '@gsap/react';
import NutritionSection from './sections/NutritionSection';
import BenefitSection from './sections/BenefitSection';
import TestimonialSection from './sections/TestimonialSection';
import FooterSection from './sections/FooterSection';

gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth:3,
      effects:true,
    })
  })
  return (
    <main>
      <Navbar/>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection/>
          <MessageSection/>
          <FlavorSection/>
          <NutritionSection/>

          <BenefitSection/>
          <TestimonialSection/>
          <FooterSection/>
        </div>
      </div>

    </main>
  )
}

export default App
