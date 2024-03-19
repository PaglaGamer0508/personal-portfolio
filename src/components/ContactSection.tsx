import Link from "next/link";
import React from "react";
import { Chivo_Mono } from "next/font/google";

const chivoMono = Chivo_Mono({ weight: ["400"], subsets: ["latin"] });

interface ContactSectionProps {}

const ContactSection: React.FC<ContactSectionProps> = ({}) => {
  return (
    <div id="contact" className="md:min-h-screen py-7 pt-14">
      <h1 className="text-center text-blue-500 text-4xl font-bold py-3">
        Contact
      </h1>

      <div
        className={`${chivoMono.className} text-xl md:text-2xl flex flex-col gap-y-14 w-[95%] md:w-[60%] lg:w-[45%] mx-auto mt-10`}
      >
        <div>
          <h1>Country</h1>
          <Link
            target="_blank"
            href={`https://www.google.com/maps/place/Dhaka/@23.7810672,90.2548734,11z/data=!3m1!4b1!4m6!3m5!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.804093!4d90.4152376!16zL20vMGZuYjQ?entry=ttu`}
          >
            <div className="bg-gray-900 hover:bg-gray-800 transition-all duration-75 rounded-3xl px-6 md:px-10 py-5 mt-5">
              Dhaka, Bangladesh
            </div>
          </Link>
        </div>

        <div>
          <h1>Country</h1>
          <Link href={`mailto:fahadmahmud747@gmail.com`}>
            <div className="bg-gray-900 hover:bg-gray-800 transition-all duration-75 rounded-3xl px-6 md:px-10 py-5 mt-5">
              fahadmahmud747@gmail.com
            </div>
          </Link>
        </div>

        <div>
          <h1>Phone</h1>
          <Link href={`tel:+880 17398-95394`}>
            <div className="bg-gray-900 hover:bg-gray-800 transition-all duration-75 rounded-3xl px-6 md:px-10 py-5 mt-5">
              +880 17398-95394
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
