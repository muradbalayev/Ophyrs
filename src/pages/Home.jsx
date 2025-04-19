import React, { useEffect } from "react";
import Transition from "../components/Transition";
import { Link } from "react-router-dom";
import Hero from "../components/Home/Hero";
import AboutSection from "../components/Home/AboutSection";
import ContactSection from "../components/Home/ContactSection";
import Courses from "../components/Home/Courses";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis, { useLenis } from "lenis/react";
import gsap from "gsap";


const Home = () => {

  //disable eslint next-line unused-vars
  const lenis = useLenis(({ scroll }) => {});

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'auto'
    });
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);



  return (
    <ReactLenis root>
      <Hero />
      <div className="page max-w-[1920px] overflow-hidden mx-auto">
        <AboutSection />
        <Courses />
        <ContactSection />
      </div>
    </ReactLenis>
  );
};

const TransitionedHome = Transition(Home);
export default TransitionedHome;