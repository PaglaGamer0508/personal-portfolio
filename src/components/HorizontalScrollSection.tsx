"use client";

import ReactLogo from "@/../public/react.svg";
import NextLogo from "@/../public/next.svg";
import TsLogo from "@/../public/typescript.svg";
import GsapLogo from "@/../public/gsap.svg";
import TailwindLogo from "@/../public/tailwind.svg";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger, Observer);

const HorizontalScrollSection: React.FC = ({}) => {
  const Tools = [
    {
      name: "Next.js",
      description:
        "Next.js is a React framework for building static and dynamic full-stack websites.",
      logo: NextLogo,
    },
    {
      name: "React",
      description:
        "React is a JavaScript library for building user interfaces.",
      logo: ReactLogo,
    },
    {
      name: "TypeScript",
      description:
        "TypeScript is a superset of JavaScript that provides static typing.",
      logo: TsLogo,
    },
    {
      name: "Tailwind",
      description:
        "Tailwind CSS is a utility-first CSS framework that makes it easy to build modern websites.",
      logo: TailwindLogo,
    },
    {
      name: "Gsap",
      description:
        "GreenSock Animation Platform (GSAP) is a JavaScript animation library.",
      logo: GsapLogo,
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sliderRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + sliderRef.current?.offsetWidth,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="overflow-x-hidden" ref={containerRef}>
      <div ref={sliderRef} className="relative pt-14">
        <div className="grid place-items-center">
          <h1 className="text-center text-blue-500 text-4xl font-bold py-3">
            My Tech Stack
          </h1>
        </div>

        <div className="panel-container flex flex-nowrap w-[600%] sm:w-[500%] h-fit">
          {Tools.map((tool, index) => (
            <div
              key={index}
              className="panel grid place-items-center w-[120%] sm:w-full px-16 py-40"
            >
              <div className="md:flex gap-x-4 cursor-default">
                <Image alt="Logo" src={tool.logo} className="w-52 h-52" />
                <div className="flex flex-col gap-y-3">
                  <h1 className="text-6xl font-bold">{tool.name}</h1>
                  <p className="text-gray-300 text-2xl max-w-[300px] lg:max-w-[350px]">
                    {tool.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollSection;
