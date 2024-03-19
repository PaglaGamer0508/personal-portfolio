"use client";

import CssLogo from "@/../public/css.svg";
import GsapLogo from "@/../public/gsap.svg";
import HtmlLogo from "@/../public/html.svg";
import JsLogo from "@/../public/javascript.svg";
import NextLogo from "@/../public/next.svg";
import NodeJsLogo from "@/../public/node-js.svg";
import ReactQueryLogo from "@/../public/react-query.svg";
import ReactLogo from "@/../public/react.svg";
import SassLogo from "@/../public/sass.svg";
import TailwindLogo from "@/../public/tailwind.svg";
import TsLogo from "@/../public/typescript.svg";
import PrismaLogo from "@/../public/prisma.svg";
import MySqlLogo from "@/../public/mysql.svg";
import PostGreSqlLogo from "@/../public/postgresql.svg";
import MongoDbLogo from "@/../public/mongodb.svg";

import Image from "next/image";
import React from "react";
import { useIntersectionObserver } from "usehooks-ts";

const SkillSection: React.FC = ({}) => {
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.3,
    freezeOnceVisible: true,
  });

  return (
    <div id="skills" ref={ref} className="bg-gray-900 py-7 pt-14">
      <h1 className="text-center text-blue-500 text-4xl font-bold py-3">
        My Skills
      </h1>

      <div className="p-10 cursor-default">
        <div className="w-[95%] md:w-[80%] lg:w-[60%] mx-auto">
          {/* first Section */}
          <div
            className={`${
              isIntersecting ? "" : "-translate-x-full opacity-0"
            } transition-all duration-1000 sm:flex justify-between`}
          >
            <div className="w-[250px]">
              <h1 className="text-blue-500 text-3xl font-bold py-3 mb-3">
                Languages
              </h1>
              <div className="flex flex-col gap-y-3 ml-5">
                <div className="flex items-center gap-2">
                  <Image alt="logo" src={HtmlLogo} className="w-8 h-8" />
                  <h1 className="text-2xl font-semibold">HTML</h1>
                </div>
                <div className="flex items-center gap-2">
                  <Image alt="logo" src={JsLogo} className="w-8 h-8" />
                  <h1 className="text-2xl font-semibold">JavaScript</h1>
                </div>
                <div className="flex items-center gap-2">
                  <Image alt="logo" src={TsLogo} className="w-8 h-8" />
                  <h1 className="text-2xl font-semibold">TypeScript</h1>
                </div>
              </div>
            </div>

            <div className="w-[250px]">
              <h1 className="text-blue-500 text-3xl font-bold py-3 mb-3">
                Frameworks
              </h1>
              <div className="flex flex-col gap-y-3 ml-5">
                <div className="flex items-center gap-2">
                  <Image alt="logo" src={NextLogo} className="w-8 h-8" />
                  <h1 className="text-2xl font-semibold">Next.js</h1>
                </div>
                <div className="flex items-center gap-2">
                  <Image alt="logo" src={ReactLogo} className="w-8 h-8" />
                  <h1 className="text-2xl font-semibold">React.js</h1>
                </div>
                <div className="flex items-center gap-2">
                  <Image alt="logo" src={NodeJsLogo} className="w-8 h-8" />
                  <h1 className="text-2xl font-semibold">Node.js</h1>
                </div>
              </div>
            </div>
          </div>

          {/* second Section */}
          <div
            className={`${
              isIntersecting ? "" : "-translate-x-full opacity-0"
            } transition-all delay-100 duration-1000 sm:flex justify-between mt-3`}
          >
            <div className="w-[250px]">
              <h1 className="text-blue-500 text-3xl font-bold py-3 mb-3">
                Styling
              </h1>
              <div className="flex flex-col gap-y-3 ml-5">
                <div className="flex items-center gap-2">
                  <Image alt="logo" src={CssLogo} className="w-8 h-8" />
                  <h1 className="text-2xl font-semibold">CSS</h1>
                </div>
                <div className="flex items-center gap-2">
                  <Image alt="logo" src={TailwindLogo} className="w-8 h-8" />
                  <h1 className="text-2xl font-semibold">Tailwind CSS</h1>
                </div>
                <div className="flex items-center gap-2">
                  <Image alt="logo" src={SassLogo} className="w-8 h-8" />
                  <h1 className="text-2xl font-semibold">Sass</h1>
                </div>
              </div>
            </div>

            <div className="w-[250px]">
              <h1 className="text-blue-500 text-3xl font-bold py-3 mb-3">
                Others
              </h1>
              <div className="flex flex-col gap-y-3 ml-5">
                <div className="flex items-center gap-2">
                  <Image alt="logo" src={GsapLogo} className="w-8 h-8" />
                  <h1 className="text-2xl font-semibold">GSAP</h1>
                </div>
                <div className="flex items-center gap-2">
                  <Image alt="logo" src={ReactQueryLogo} className="w-8 h-8" />
                  <h1 className="text-2xl font-semibold">ReactQuery</h1>
                </div>
                <div className="flex items-center gap-2">
                  <Image alt="logo" src={PrismaLogo} className="w-8 h-8" />
                  <h1 className="text-2xl font-semibold">Prisma</h1>
                </div>
              </div>
            </div>
          </div>

          {/* Third section */}
          <div
            className={`${
              isIntersecting ? "" : "-translate-x-full opacity-0"
            } transition-all delay-200 duration-1000 mt-3`}
          >
            <h1 className="text-blue-500 text-center text-3xl font-bold py-3 mb-3">
              Databases
            </h1>

            <div className="flex justify-center flex-wrap gap-x-7 gap-y-3 ml-5">
              <div className="flex items-center gap-2">
                <Image alt="logo" src={MySqlLogo} className="w-8 h-8" />
                <h1 className="text-2xl font-semibold">MySQL</h1>
              </div>
              <div className="flex items-center gap-2">
                <Image alt="logo" src={PostGreSqlLogo} className="w-8 h-8" />
                <h1 className="text-2xl font-semibold">PostgreSQL</h1>
              </div>
              <div className="flex items-center gap-2">
                <Image alt="logo" src={MongoDbLogo} className="w-8 h-8" />
                <h1 className="text-2xl font-semibold">MongoDB</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid place-items-center">
        <h1 className="bg-slate-300/15 text-lg font-semibold px-3 py-1 rounded-full cursor-default">
          And Many Others...
        </h1>
      </div>
    </div>
  );
};

export default SkillSection;
