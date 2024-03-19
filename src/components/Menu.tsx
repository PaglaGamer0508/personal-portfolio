"use client";

import Logo from "@/../public/f-logo.svg";
import { useMenuState } from "@/global-state-store/menuStateStore";
import { useLockBodyScroll } from "@uidotdev/usehooks";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Menu: React.FC = ({}) => {
  const { isOpen, closeMenu } = useMenuState();
  const [menuOpen, setMenuOpen] = useState(false);

  useLockBodyScroll();

  useEffect(() => {
    setTimeout(() => {
      setMenuOpen(true);
    }, 100);
  }, [menuOpen]);

  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } sm:hidden fixed inset-0 z-[300] bg-black/80 backdrop-blur-md`}
    >
      <div className="flex items-center justify-between lg:justify-start w-full p-3">
        <Link href={"#top"}>
          <Image alt="logo" src={Logo} className="w-10 h-10" />
        </Link>

        {/* Open Menu button */}
        <button onClick={() => closeMenu()}>
          <X className="w-8 h-8" />
        </button>
      </div>

      <div className="flex flex-col gap-2 p-3">
        <Link
          className={`bg-gray-700/50 hover:bg-gray-600/60 backdrop-blur-md text-xl py-3 px-6 rounded-lg transition-transform duration-75 w-full ${
            menuOpen ? "" : "-translate-x-[120%]"
          }`}
          onClick={() => closeMenu()}
          href={"#top"}
        >
          Home
        </Link>

        <Link
          className={`bg-gray-700/50 hover:bg-gray-600/60 backdrop-blur-md text-xl py-3 px-6 rounded-lg transition-transform duration-75 w-full ${
            menuOpen ? "" : "-translate-x-[120%]"
          }`}
          onClick={() => closeMenu()}
          href={"#skills"}
        >
          Skills
        </Link>

        <Link
          className={`bg-gray-700/50 hover:bg-gray-600/60 backdrop-blur-md text-xl py-3 px-6 rounded-lg transition-transform duration-75 w-full ${
            menuOpen ? "" : "-translate-x-[120%]"
          }`}
          onClick={() => closeMenu()}
          href={"#works"}
        >
          Works
        </Link>

        <Link
          className={`bg-gray-700/50 hover:bg-gray-600/60 backdrop-blur-md text-xl py-3 px-6 rounded-lg transition-transform duration-75 w-full ${
            menuOpen ? "" : "-translate-x-[120%]"
          }`}
          onClick={() => closeMenu()}
          href={"#about"}
        >
          About
        </Link>

        <Link
          className={`bg-gray-700/50 hover:bg-gray-600/60 backdrop-blur-md text-xl py-3 px-6 rounded-lg transition-transform duration-75 w-full ${
            menuOpen ? "" : "-translate-x-[120%]"
          }`}
          onClick={() => closeMenu()}
          href={"#contact"}
        >
          Contact
        </Link>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Menu;
