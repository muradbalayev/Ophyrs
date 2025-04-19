import React, { useEffect } from "react";
import Transition from "../components/Transition";
import { Link } from "react-router-dom";
import Hero from "../components/Home/Hero";
import AboutSection from "../components/Home/AboutSection";
import ContactSection from "../components/Home/ContactSection";
import Events from "../components/Home/Events";
import Footer from "../layout/Footer/Footer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis, { useLenis } from "lenis/react";
import gsap from "gsap";
import ParallaxImage from "../components/ParallaxImage/ParallaxImage";
import StickyCards from "../components/Home/StickyCards";

const Home = () => {
  const lenis = useLenis(({ scroll }) => {});

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // ScrollTrigger.create({
    //   trigger: ".mix-tape",
    //   start: "top bottom",
    //   end: "bottom bottom",
    //   onUpdate: (self) => {
    //     gsap.set(".strip", {
    //       x: self.progress * 300,
    //     });
    //   },
    // });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);



  return (
    <ReactLenis root>
      <Hero />
      <div className="page max-w-[1920px] overflow-hidden mx-auto">
        <AboutSection />
        {/* <StickyCards /> */}
        <Events />
        <ContactSection />
        {/* <Footer /> */}
      </div>
    </ReactLenis>
  );
};

export default Transition(Home);
