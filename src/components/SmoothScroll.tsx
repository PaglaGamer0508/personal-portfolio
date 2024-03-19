"use client";

import React from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default SmoothScroll;
