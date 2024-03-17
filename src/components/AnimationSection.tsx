"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useRef } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import GsapScrollTriggerTest from "./GsapScrollTriggerTest";

import DeveloperIllustration from "@/../public/developer.svg";
import Image from "next/image";
import AllToolsSection from "./AllToolsSection";
import { ChevronRight, Download } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface AnimationSectionProps {}

const AnimationSection: React.FC<AnimationSectionProps> = ({}) => {
  const tiltedSectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    const tiltedSection = tiltedSectionRef.current;
    const container = containerRef.current;
    const header = headerRef.current;
    const image = imageRef.current;

    tl.to(tiltedSection, {
      duration: 1,
      x: container?.offsetWidth! * 1.7,
      ease: "power1.inOut",
    }).to(image, {
      duration: 1,
      y: -500,
      ease: "back.out",
    });

    gsap.to(header, {
      opacity: 100,
      delay: 0.5,
    });
  });

  return (
    <div className="h-[2000px]">
      <div ref={containerRef} className="relative overflow-hidden bg-gray-900">
        <div className="w-[50%] pl-28 py-48">
          <div ref={headerRef} className="opacity-0">
            <h2 className="text-4xl font-bold">Hi, I am</h2>
            <h1 className="w-fit bg-blue-500 text-5xl font-bold py-2 p-3 rounded-lg mt-2">
              Fahad Mahmud
            </h1>
            <p className="text-gray-300 text-2xl mt-3">
              I am a Full-Stack Web Developer
            </p>
            <div className="flex flex-col w-[200px]">
              <button className="flex gap-x-1 justify-center items-center border border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white text-xl py-2 px-3 rounded-full mt-3 transition-all duration-75">
                <span>Download CV</span>
              </button>
              <button className="flex gap-x-1 justify-center items-center bg-blue-500 hover:bg-blue-600 text-white text-xl py-2 px-3 rounded-full mt-3 transition-all duration-75">
                <span>Contact</span>
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
        <div
          ref={tiltedSectionRef}
          className="h-full w-[120%] absolute top-0 right-full overflow-hidden"
        >
          <div className="h-full w-full absolute top-0 -right-[100px] -skew-x-[10deg] bg-slate-800"></div>
          <div ref={imageRef} className="relative top-[700px] left-56 z-100">
            <Image
              alt=""
              src={DeveloperIllustration}
              className="w-64 h-64 rounded-full"
            />
          </div>
        </div>
      </div>

      <GsapScrollTriggerTest />

      <AllToolsSection />
    </div>
  );
};

export default AnimationSection;
