import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import ReactLenis from "lenis/react";
import "./Stickycards/StickyCards.css";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Card = ({ title, copy, index }) => {
  return (
    <div style={{willChange: "transform"}} className="card min-h-[30vh]" id={`card-${index + 1}`}>
      <div className="card-inner">
        <div className="card-content gap-4 flex flex-col">
          <h1 className="lg:text-7xl sm:text-5xl text-4xl font-bold">
            {title}
          </h1>
          <p className="lg:text-4xl sm:text-3xl text-2xl">{copy}</p>
        </div>
        <div className="card-img">
          <img
            className="w-full h-full object-fit"
            src={`/assets/card-${index + 1}.jpg`}
            alt={title}
          />
        </div>
      </div>
    </div>
  );
};

export default function StickyCards() {
  const cards = [
    {
      title: "Immersive Learning Experiences",
      copy: "Outdoor lessons that spark curiosity and engagement. Students and teachers connect with nature for deeper, more memorable education.",
    },
    {
      title: "AI-Powered Guidance",
      copy: "Smart lesson planning, real-time voice guidance, and personalized feedback—driven by advanced AI for every learning journey.",
    },
    {
      title: "Eco-Connected Education",
      copy: "Lessons held in forests, riversides, and heritage sites. Discover, explore, and understand the world hands-on.",
    },
    {
      title: "Social Impact & Creativity",
      copy: "Build community, share stories, and inspire change. Every tour is a stage for creativity, collaboration, and social good.",
    },
  ];

  const container = useRef();

  useGSAP(
    () => {
      if (window.innerWidth <= 900) return;
      const cards = gsap.utils.toArray(".card");

      ScrollTrigger.create({
        trigger: cards[0],
        start: "top 35%",
        endTrigger: cards[cards.length - 1],
        end: "top 30%",
        pin: ".intro",
        pinSpacing: false,
      });

      cards.forEach((card, index) => {
        const isLastCard = index === cards.length - 1;
        const cardInner = card.querySelector(".card-inner");

        if (!isLastCard) {
          ScrollTrigger.create({
            trigger: card,
            start: "top 35%",
            endTrigger: ".outro",
            end: "top 65%",
            pin: true,
            pinSpacing: false,
          });

          gsap.to(cardInner, {
            y: `-${(cards.length - index) * 14}vh`,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 35%",
              endTrigger: ".outro",
              end: "top 65%",
              scrub: true,
            },
          });
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container }
  );

  return (
    <ReactLenis root>
      <div className="app" ref={container}>
        <section className="intro my-16">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-4 text-center">
            Reinventing Learning. <br className="hidden md:inline" /> Inspiring
            Minds Outdoors.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto text-center mt-4">
            Award-winning platform for immersive, AI-powered, and eco-connected
            education. Where every lesson is an adventure.
          </p>
        </section>

        <section className="cards">
          {cards.map((card, index) => (
            <Card key={index} {...card} index={index} />
          ))}
        </section>

        <section className="outro">
          <h1>Let’s build a brand that leaves a mark.</h1>
        </section>
        <section className="h-[40vh]"></section>
      </div>
    </ReactLenis>
  );
}
