import React, { useCallback, useRef, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./Home.css";
import gsap from "gsap";
import particleConfig from "../particlesjs/particleConfig";
import SocialLinks from "./svgicons/SocialLinks";
import AboutModal from "./svgicons/AboutModal";
import {
  AmsLogo,
  ArrowIcon,
  ArrowIconDown,
  MainLogo,
  Telephone,
  Whatsapp,
} from "./svgicons/SocialIcons";
const Home = ({ scrollToAbout }) => {
  const particlesInit = useCallback(async (main) => {
    try {
      await loadFull(main);
    } catch (error) {
      console.error("Failed to initialize particles:", error);
    }
  }, []);
  const tiltRef = useRef(null);
  const mouseMoving = useCallback((e) => {
    const tiltElement = tiltRef.current;
    // Add null check for safety
    if (!tiltElement) return;

    try {
      const bounds = tiltElement.getBoundingClientRect();
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;

      const rotateX = -(e.clientY - centerY) / 20;
      const rotateY = (e.clientX - centerX) / 20;

      gsap.to(tiltElement, {
        rotationX: rotateX,
        rotationY: rotateY,
        transformPerspective: 1000,
        ease: "easeInOut",
        duration: 0.8,
      });
    } catch (error) {
      console.error("Error in mouse movement animation:", error);
    }
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="relative h-[106vh] w-full" id="home">
      <div>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particleConfig}
        />
      </div>
      <section className="flex flex-col justify-between h-screen text-white">
        <header className="z-10 pointer-events-none flex items-center justify-between w-full px-4 mt-4 max-w-screen-xl mx-auto">
          <AmsLogo />
          <div className="flex gap-4 pointer-events-auto">
            <a target="_blank" href="tel:7041352307" rel="noopener noreferrer">
              <Telephone />
            </a>
            <a
              href="https://wa.me/917041352307?text=Hi, I'm from your Portfolio. I want to know more about your services?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Whatsapp />
            </a>
          </div>
        </header>
        <div className="flex -mt-24 relative">
          <div className="w-full max-w-screen-xl px-4 mx-auto" id="page1-in">
            <div id="tiltdiv" ref={tiltRef} onMouseMove={(e) => mouseMoving(e)}>
              <MainLogo />
            </div>
            <div className="relative ml-[30px] md:ml-[90px]">
              <h1 className="pointer-events-none text-[34px] tracking-wide sm:text-[48px] md:text-[64px] font-extrabold font-['Spartan'] z-10 -mb-2 sm:-mb-3 md:-mb-6">
                Aditya Mishra
              </h1>
              <p className="pointer-events-none font-['Merriweather'] italic my-4 md:my-8">
                MERN Stack Developer
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group"
              >
                About Me
                <ArrowIcon />
              </button>
              {isModalOpen && (
                <AboutModal
                  className="z-50"
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                />
              )}
            </div>
          </div>
          {/* social ke sare conponents aa gaye  */}
          <SocialLinks />
        </div>
        <button
          onClick={scrollToAbout}
          className=" py-2 px-5 rounded font-extrabold relative hover:scale-110 ease-in-out duration-100 group self-center -z-0"
        >
          <ArrowIconDown />
        </button>
      </section>
    </div>
  );
};

export default Home;
