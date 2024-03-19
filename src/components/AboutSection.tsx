"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import Link from "next/link";
import { Facebook, Github, Linkedin } from "lucide-react";
import { Icons } from "./Icons";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutSection: React.FC = ({}) => {
  const pRef = useRef<HTMLHeadingElement>(null);
  const [isMessaengerIconHover, setisMessaengerIconHover] = useState(false);

  useGSAP(() => {
    const SplitTypes = document.querySelectorAll<HTMLElement>(".about-text");

    SplitTypes.forEach((char, i) => {
      const text = new SplitType(char, {
        types: "words",
      });

      gsap.from(text.words, {
        scrollTrigger: {
          trigger: pRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
        opacity: 0.1,
        stagger: 0.1,
      });
    });
  });

  return (
    <div id="about" className="bg-gray-900 py-7 pt-14 md:min-h-screen">
      <h1 className="text-center text-blue-500 text-4xl font-bold py-3">
        About me
      </h1>
      <p
        ref={pRef}
        className="about-text text-center text-3xl md:text-4xl lg:text-5xl leading-[2.5rem] md:leading-[3rem] lg:leading-[4rem] max-w-[95%] md:max-w-[70%] mx-auto my-16"
      >
        I am Fahad, I am a Full-stack Web Developer from Dhaka, Bangladesh. I
        can build robust Full-stack Web Applications using Next.js, React and
        Tailwind CSS.
      </p>
      <div>
        <p className="text-center text-blue-500 text-2xl font-semibold">
          Find me on
        </p>
        <div className="flex items-center gap-x-6 w-fit mx-auto py-5">
          <Link
            target="_blank"
            href={"https://www.facebook.com/fahad.mahmud.16547008"}
          >
            <Facebook className="w-7 h-7 hover:text-blue-500" />
          </Link>

          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/fahad-mahmud-0ab8a7289"}
          >
            <Linkedin className="w-7 h-7 hover:text-blue-500" />
          </Link>

          <Link target="_blank" href={"https://github.com/PaglaGamer0508"}>
            <Github className="w-7 h-7 hover:text-blue-500" />
          </Link>

          <Link
            onMouseEnter={() => setisMessaengerIconHover(true)}
            onMouseLeave={() => setisMessaengerIconHover(false)}
            target="_blank"
            href={"https://m.me/fahad.mahmud.16547008"}
          >
            <Icons.messengerIcon
              width={40}
              height={40}
              fill={isMessaengerIconHover ? "#3b82f6" : "#ffffff"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
