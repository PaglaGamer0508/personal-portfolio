"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(useGSAP, ScrollTrigger, Observer);

const GsapAnimationTest: React.FC = ({}) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const boxRef2 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const box = boxRef.current;
    const box2 = boxRef2.current;

    const tl = gsap.timeline({ repeat: -1 });

    // tl.to(box, {
    //   duration: 1, // Duration of the animation in seconds
    //   x: 100, // Move 100 pixels to the right
    //   ease: "power1.inOut", // Easing function for smooth animation
    // })
    //   // Animate the element to move down
    //   .to(box, {
    //     duration: 1,
    //     y: 100, // Move 100 pixels down
    //     ease: "power1.inOut",
    //   })
    //   // Animate the element to move left
    //   .to(box, {
    //     duration: 1,
    //     x: "-=100", // Move 100 pixels to the left
    //     ease: "power1.inOut",
    //   })
    //   // Animate the element to move up
    //   .to(box, {
    //     duration: 1,
    //     y: "-=100", // Move 100 pixels up
    //     ease: "power1.inOut",
    //   });

    gsap.to(box, {
      duration: 2,
      rotate: 360,
      repeat: -1,
      ease: "none",
    });

    gsap.to(box2, {
      duration: 1,
      rotate: 360,
      repeat: -1,
      ease: "none",
    });
  });

  return (
    <div className="min-h-screen grid place-items-center">
      <div
        ref={boxRef}
        className="relative w-44 h-44 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl"
      >
        <div
          ref={boxRef2}
          className="absolute top-4 left-4 w-12 h-12 bg-green-800 rounded-lg"
        ></div>
      </div>
    </div>
  );
};

export default GsapAnimationTest;
