import { Copyright, Facebook, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Icons } from "./Icons";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  const [isMessaengerIconHover, setisMessaengerIconHover] = useState(false);
  const [isWhatsAppIconHover, setisWhatsAppIconHover] = useState(false);

  return (
    <div className="mt-16">
      <div className="md:flex items-center justify-between bg-gray-900 rounded-t-3xl border border-gray-400 border-b-transparent w-[80%] mx-auto px-10 py-7">
        <div className="flex items-center justify-center md:justify-start gap-x-1 text-gray-300">
          <Copyright />
          <p>Fahad Mahmud</p>
        </div>
        <div className="flex items-center gap-x-3 w-fit text-gray-300 mt-3 md:mt-0 mx-auto">
          <Link
            onMouseEnter={() => setisWhatsAppIconHover(true)}
            onMouseLeave={() => setisWhatsAppIconHover(false)}
            target="_blank"
            href={"https://wa.me/+8801739895394"}
          >
            <Icons.whatsappIcon
              width={24}
              height={24}
              fill={isWhatsAppIconHover ? "#3b82f6" : "#d1d6db"}
            />
          </Link>
          <Link
            target="_blank"
            href={"https://www.facebook.com/fahad.mahmud.16547008"}
          >
            <Facebook className="w-5 h-5 hover:text-blue-500" />
          </Link>

          <Link
            onMouseEnter={() => setisMessaengerIconHover(true)}
            onMouseLeave={() => setisMessaengerIconHover(false)}
            target="_blank"
            href={"https://m.me/fahad.mahmud.16547008"}
          >
            <Icons.messengerIcon
              width={30}
              height={30}
              fill={isMessaengerIconHover ? "#3b82f6" : "#d1d6db"}
            />
          </Link>

          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/fahad-mahmud-0ab8a7289"}
          >
            <Linkedin className="w-5 h-5 hover:text-blue-500" />
          </Link>

          <Link target="_blank" href={"https://github.com/PaglaGamer0508"}>
            <Github className="w-5 h-5 hover:text-blue-500" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
