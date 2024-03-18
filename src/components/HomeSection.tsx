"use client";

import React, { useEffect, useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

import Logo from "@/../public/f-logo.svg";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SkillSection from "./SkillSection";
import GsapScrollTriggerTest from "./HorizontalScrollSection";
import ProjectsSection from "./ProjectsSection";

const HomeSection: React.FC = ({}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      if (scrollPos > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tiltedSectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const navbarRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    const tiltedSection = tiltedSectionRef.current;
    const container = containerRef.current;
    const header = headerRef.current;
    const image = imageRef.current;

    const navbar = navbarRef.current;

    tl.to(tiltedSection, {
      duration: 1,
      x: container?.offsetWidth! * 1.7,
      ease: "power1.inOut",
    })
      .to(image, {
        duration: 1,
        y: -500,
        ease: "back.out",
      })
      .to(navbar, {
        duration: 0.3,
        y: 0,
      });

    gsap.to(header, {
      duration: 1,
      opacity: 100,
      delay: 0.5,
    });
  });

  return (
    <div className="relative">
      {/* ************************* Navbar ************************* */}
      <div
        ref={navbarRef}
        className={`${
          isScrolled ? "bg-black/30 backdrop-blur-md shadow-md" : ""
        } flex items-center justify-between fixed top-0 left-0 z-[200] w-full lg:-translate-y-full transition-all duration-100 px-12 py-3`}
      >
        <div className="flex items-center gap-x-10">
          <Image alt="logo" src={Logo} className="w-10 h-10" />
          <ul className="flex items-center gap-x-3 text-xl font-medium">
            <li>
              <Link href={"#"} className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href={"#skills"} className="hover:text-blue-500">
                Skills
              </Link>
            </li>
            <li>
              <Link href={"#works"} className="hover:text-blue-500">
                Works
              </Link>
            </li>
            <li>
              <Link href={"#"} className="hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* ************************* Navbar END HERE ************************* */}

      {/* Heading Section */}
      <div ref={containerRef} className="relative overflow-hidden bg-gray-900">
        <div className="lg:w-[50%] px-5 md:pl-28 py-48">
          <div ref={headerRef} className="lg:opacity-0 transition-all">
            <h2 className="text-4xl font-bold">Hi, I am</h2>
            <h1 className="w-fit bg-blue-500 text-5xl font-bold py-2 p-3 rounded-lg mt-2">
              Fahad Mahmud
            </h1>
            <p className="text-gray-300 text-2xl mt-3">
              I am a Full-Stack Web Developer
            </p>
            <div className="flex flex-col w-[200px]">
              <button
                title="Not Available"
                className="flex gap-x-1 justify-center items-center border border-blue-500 text-white text-xl py-2 px-3 rounded-full mt-3 transition-all duration-75 cursor-not-allowed"
              >
                <span>Download CV</span>
              </button>
              <Link
                href={"#contact"}
                className="group flex gap-x-1 justify-center items-center bg-blue-500 hover:bg-blue-600 text-white text-xl py-2 px-3 rounded-full mt-3 transition-all duration-75"
              >
                <span>Contact</span>
                <ChevronRight className="group-hover:translate-x-2 transition-all duration-75" />
              </Link>
            </div>
          </div>
        </div>
        <div
          ref={tiltedSectionRef}
          className="hidden lg:block h-full w-[120%] absolute top-0 right-full overflow-hidden"
        >
          <div className="h-full w-full absolute top-0 -right-[100px] -skew-x-[10deg] bg-slate-800"></div>
          <div ref={imageRef} className="relative top-[700px] left-64 z-100">
            <Image alt="" src={Logo} className="w-64 h-64" />
          </div>
        </div>
      </div>

      <GsapScrollTriggerTest />

      <SkillSection />

      <ProjectsSection />
    </div>
  );
};

export default HomeSection;
