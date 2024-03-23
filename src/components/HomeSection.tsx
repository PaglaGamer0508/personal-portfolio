"use client";

import React, { useEffect, useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

import Logo from "@/../public/f-logo.svg";
import Image from "next/image";
import Link from "next/link";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import HorizontalScrollSection from "./HorizontalScrollSection";
import OpenMenuButton from "./OpenMenuButton";
import ProjectsSection from "./ProjectsSection";
import SkillSection from "./SkillSection";

const HomeSection: React.FC = ({}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if (!isScrolled) {
      setShowNavbar(true);
    } else {
      setShowNavbar(isScrolled);
    }
  }, [isScrolled]);

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
  const headingRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const navbarRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    const tiltedSection = tiltedSectionRef.current;
    const container = containerRef.current;
    const heading = headingRef.current;
    const image = imageRef.current;

    const navbar = navbarRef.current;

    tl.to(tiltedSection, {
      duration: 1,
      x: container?.offsetWidth! * 1.7,
      ease: "power1.inOut",
    }).to(image, {
      duration: 1,
      y: -500,
      ease: "back.out",
    });

    // heading animation
    gsap.to(heading, {
      duration: 1,
      opacity: 100,
      delay: 0.5,
    });

    Observer.create({
      type: "wheel",
      onUp: () => {
        setShowNavbar(true);
      },
      onDown: () => {
        setShowNavbar(false);
      },
    });

    Observer.create({
      type: "touch",
      onUp: () => {
        setShowNavbar(false);
      },
      onDown: () => {
        setShowNavbar(true);
      },
    });
  });

  useGSAP(
    () => {
      gsap.to(navbarRef.current, {
        duration: 0.3,
        y: showNavbar ? 0 : "-100%",
        bg: showNavbar ? "rgb(0, 0, 0, 0.3)" : "transparent",
      });
    },
    { dependencies: [showNavbar, isScrolled] }
  );

  return (
    <div id="top" className="relative">
      {/* ************************* Navbar ************************* */}
      <div
        ref={navbarRef}
        className={`${
          isScrolled ? "bg-black/30 backdrop-blur-md shadow-md" : ""
        } flex items-center justify-between fixed top-0 left-0 z-[200] w-full transition-all duration-100 px-4 md:px-12 py-3`}
      >
        <div className="flex items-center justify-between lg:justify-start gap-x-10 w-full">
          <Link href={"#top"}>
            <Image alt="logo" src={Logo} className="w-10 h-10" />
          </Link>

          {/* Open Menu button */}
          <div className="lg:hidden">
            <OpenMenuButton />
          </div>

          <ul className="hidden lg:flex items-center gap-x-10 text-xl font-medium">
            <li>
              <Link href={"#top"} className="hover:text-blue-500">
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
              <Link href={"#about"} className="hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link href={"#contact"} className="hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* ************************* Navbar END HERE ************************* */}

      {/* Landing Section */}
      <div ref={containerRef} className="relative overflow-hidden bg-gray-900">
        <div className="lg:w-[50%] px-5 md:pl-10 lg:pl-28 py-48">
          <div
            ref={headingRef}
            className="flex flex-col items-center md:block md:opacity-0 transition-all"
          >
            <h2 className="text-4xl font-bold">Hi, I am</h2>
            <h1 className="w-fit bg-blue-500 text-4xl lg:text-5xl font-bold py-2 p-3 rounded-lg mt-2">
              Fahad Mahmud
            </h1>
            <p className="text-center md:text-left text-gray-300 text-2xl mt-3">
              I am a Full-Stack Web Developer
            </p>
            <div className="flex flex-col w-[200px]">
              {/* Contact Me */}
              <Link
                href={"#contact"}
                className="group flex gap-x-1 justify-center items-center hover:before:bg-redborder-red-500 relative w-full overflow-hidden border border-blue-500 py-2 px-3 text-blue-500 text-xl shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-500 hover:text-white hover:shadow-blue-500 hover:before:left-0 hover:before:w-full rounded-full mt-3"
              >
                <span className="relative z-10">Contact Me</span>
              </Link>
              {/* Download CV */}
              <Link
                download
                target="_blank"
                href={`./fahad-cv.pdf`}
                className="relative flex h-[50px] w-full items-center justify-center overflow-hidden bg-gray-800 text-white text-xl shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-500 before:duration-500 before:ease-out hover:before:h-56 hover:shadow-blue-500 hover:before:w-56 rounded-full active:scale-95 mt-3"
              >
                <span className="relative z-10">Download CV</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          ref={tiltedSectionRef}
          className="hidden md:block h-full w-[120%] absolute top-0 z-30 right-full overflow-hidden"
        >
          <div className="h-full w-full absolute top-0 -right-[100px] -skew-x-[10deg] bg-slate-800"></div>
          <div
            ref={imageRef}
            className="relative top-[700px] left-40 lg:left-64 z-100"
          >
            <Image
              alt=""
              src={Logo}
              className={`w-48 lg:w-64 h-4w-48 lg:h-64`}
            />
          </div>
        </div>
      </div>

      <HorizontalScrollSection />

      <SkillSection />

      <ProjectsSection />

      <AboutSection />

      <ContactSection />

      <Footer />
    </div>
  );
};

export default HomeSection;
