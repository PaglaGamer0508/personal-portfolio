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
              href={""}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="60"
                height="60"
                fill={isFiverrIconHover ? "#3b82f6" : "#d1d6db"}
                viewBox="0 0 50 50"
              >
                <path d="M41.86 21.321v-1.539h-2.919l-1.283-.022c-1.097 0-1.847.722-2.141 1.561v-1.539h-3.269v9.979h3.269v-2.14-3.312c0-.995.806-1.801 1.801-1.801h1.274v7.253h3.269v-2.14-3.312c0-.995.806-1.801 1.801-1.801h1.623v-2.726l-1.283-.022C42.905 19.759 42.156 20.482 41.86 21.321zM18.597 19.991L16.843 25.758 15.089 19.991 11.82 19.991 15.371 29.97 15.562 29.97 18.124 29.97 18.315 29.97 21.866 19.991zM5.239 19.991v-.665c0-.583.472-1.055 1.055-1.055h2.064v-2.737H5.523c-1.962 0-3.553 1.591-3.553 3.553v.905H.059v2.645h1.911v7.334H5.24v-7.334h3.118v7.334h3.269v-7.334-2.645H8.358 5.239zM26.398 19.857H26c-2.678 0-4.849 2.171-4.849 4.849v.548c0 2.678 2.171 4.849 4.849 4.849h.885c1.834 0 3.403-1.132 4.048-2.735l-2.884-.842c0 0-.345.988-1.548.988-1.358 0-2.077-.744-2.172-1.586h-.001v-.005c-.007-.061-.01-.123-.01-.185h3.688 3.242v-1.032C31.248 22.028 29.077 19.857 26.398 19.857zM24.322 23.814c.039-.897.777-1.613 1.684-1.613h.312c.907 0 1.645.716 1.684 1.613H24.322zM47.932 26.136c-1.123 0-2.033.91-2.033 2.033s.91 2.033 2.033 2.033c1.123 0 2.033-.91 2.033-2.033C49.964 27.046 49.055 26.136 47.932 26.136z"></path>
              </svg>
            </Link>

            <Link
              onMouseEnter={() => setisUpWorkIconHover(true)}
              onMouseLeave={() => setisUpWorkIconHover(false)}
              target="_blank"
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
            </Link>

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
