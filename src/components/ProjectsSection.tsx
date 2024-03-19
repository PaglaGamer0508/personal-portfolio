"use client";

import React from "react";
import DonutBankLogo from "@/../public/projects-logo/donut.png";
import ClickBlitzLogo from "@/../public/projects-logo/clickblitz.svg";
import GaiLogo from "@/../public/projects-logo/gai.svg";
import WeatherPulseLogo from "@/../public/projects-logo/weather-pulse.svg";
import WordWiseLogo from "@/../public/projects-logo/wordwise.png";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useIntersectionObserver } from "usehooks-ts";

interface ProjectsSectionProps {}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({}) => {
  const projects = [
    {
      name: "Donut Bank",
      description: "Dummy Payment Gateway",
      logo: DonutBankLogo,
      websiteURL: "https://donutbank.vercel.app",
    },
    {
      name: "Click Blitz",
      description: "Click Speed Test",
      logo: ClickBlitzLogo,
      websiteURL: "https://clickblitz.netlify.app",
    },
    {
      name: "GAI-CST2-24",
      description: "College Class Website",
      logo: GaiLogo,
      websiteURL: "https://gai-cst2-24.vercel.app",
    },
    {
      name: "Weather Pulse",
      description: "Weather App",
      logo: WeatherPulseLogo,
      websiteURL: "https://weatherpulse.vercel.app",
    },
    {
      name: "Word Wise",
      description: "Dictionary App",
      logo: WordWiseLogo,
      websiteURL: "https://wordwise-dictionary.vercel.app",
    },
  ];

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
    freezeOnceVisible: true,
  });

  return (
    <div
      ref={ref}
      id="works"
      className="md:min-h-screen py-7 pt-14 overflow-y-hidden"
    >
      <h1 className="text-center text-blue-500 text-4xl font-bold py-3">
        Check Out My Works
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3 lg:gap-x-8 gap-y-5 px-5 sm:px-10 py-14 md:py-28 mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${
              isIntersecting ? "" : "translate-y-full opacity-0"
            } flex flex-col justify-between border-2 border-blue-500 rounded-xl overflow-hidden transition-all duration-1000`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="flex flex-col items-center p-2">
              <Image
                alt="Logo"
                src={project.logo}
                width={128}
                height={128}
                className="w-20 h-20"
              />

              <h1 className="text-blue-500 text-2xl text-center font-semibold">
                {project.name}
              </h1>
              <p className="max-w-[150px] text-center text-gray-300">
                {project.description}
              </p>
            </div>

            <Link
              href={project.websiteURL}
              target="_blank"
              className="flex items-center justify-center font-semibold gap-x-1 bg-blue-500 p-2"
            >
              <span>Go to Website</span>
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
