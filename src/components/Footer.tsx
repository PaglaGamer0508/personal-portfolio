import { Copyright, Facebook, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Icons } from "./Icons";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  const [isMessengerIconHover, setIsMessengerIconHover] = useState(false);
  const [isWhatsAppIconHover, setIsWhatsAppIconHover] = useState(false);
  const [isFiverrIconHover, setIsFiverrIconHover] = useState(false);
  const [isUpWorkIconHover, setisUpWorkIconHover] = useState(false);

  return (
    <div className="mt-16">
      <div className="bg-gray-900 rounded-t-3xl border border-gray-400 border-b-transparent w-[80%] mx-auto px-10 pt-6 pb-2">
        <div className="md:flex items-center justify-between">
          <p className="text-center md:text-left text-gray-300">
            Created By Fahad
          </p>
          <div className="flex items-center gap-x-3 w-fit text-gray-300">
            <Link
              onMouseEnter={() => setIsFiverrIconHover(true)}
              onMouseLeave={() => setIsFiverrIconHover(false)}
              target="_blank"
              href={"https://www.fiverr.com/fahad_m_dev"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                id="fiverr"
                width={20}
                hanging={20}
              >
                <g fill={isFiverrIconHover ? "#3b82f6" : "#d1d6db"}>
                  <path d="M13 13V5H5v-.5C5 3.673 5.673 3 6.5 3H8V0H6.5A4.505 4.505 0 0 0 2 4.5V5H0v3h2v5H0v3h7v-3H5V8h5.028v5H8v3h7v-3h-2z"></path>
                  <circle cx="11.5" cy="1.5" r="1.5"></circle>
                </g>
              </svg>
            </Link>

            {/* <Link
              onMouseEnter={() => setisUpWorkIconHover(true)}
              onMouseLeave={() => setisUpWorkIconHover(false)}
              // target="_blank"
              href={""}
            >
              <svg
                fill={isUpWorkIconHover ? "#3b82f6" : "#d1d6db"}
                width="30px"
                height="30px"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24.75 17.542c-1.469 0-2.849-0.62-4.099-1.635l0.302-1.432 0.010-0.057c0.276-1.521 1.13-4.078 3.786-4.078 1.99 0 3.604 1.615 3.604 3.604 0 1.984-1.615 3.599-3.604 3.599zM24.75 6.693c-3.385 0-6.016 2.198-7.083 5.818-1.625-2.443-2.865-5.38-3.583-7.854h-3.646v9.484c-0.005 1.875-1.521 3.391-3.396 3.396-1.875-0.005-3.391-1.526-3.396-3.396v-9.484h-3.646v9.484c0 3.885 3.161 7.068 7.042 7.068 3.885 0 7.042-3.182 7.042-7.068v-1.589c0.708 1.474 1.578 2.974 2.635 4.297l-2.234 10.495h3.729l1.62-7.615c1.417 0.906 3.047 1.479 4.917 1.479 4 0 7.25-3.271 7.25-7.266 0-4-3.25-7.25-7.25-7.25z" />
              </svg>
            </Link> */}

            <Link
              onMouseEnter={() => setIsWhatsAppIconHover(true)}
              onMouseLeave={() => setIsWhatsAppIconHover(false)}
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
              onMouseEnter={() => setIsMessengerIconHover(true)}
              onMouseLeave={() => setIsMessengerIconHover(false)}
              target="_blank"
              href={"https://m.me/fahad.mahmud.16547008"}
            >
              <Icons.messengerIcon
                width={30}
                height={30}
                fill={isMessengerIconHover ? "#3b82f6" : "#d1d6db"}
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
        <div className="flex items-center justify-center gap-x-1 text-gray-400">
          <Copyright className="w-4 h-4" />
          <p className="text-sm">Fahad Mahmud - 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
