import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/website/logo.png";

const FooterLinks = [
  {
    id:1,
    title: "Home",
    link: "/#",
  },
  {
    id:1,
    title: "About",
    link: "/#about",
  },
  {
    id:1,
    title: "Contact",
    link: "/#contact",
  },
  {
    id:1,
    title: "Blog",
    link: "/#blog",
  },
];
export const Footer = () => {
  return (
    <div data-aos='slide-up' data-aos-duration='500' data-aos-delay='200' className="bg-gray-700 rounded-md  text-white  dark:bg-gray-900">
      <section className="container flex justify-center items-center">
        <div className=" grid md:grid-cols-2 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              Books Store
            </h1>
            <br />
            <div className="ml-5">
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Chennai, TamilNadu</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 123456789</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6 ">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-1 sm:grid-cols-1 col-span-1 md:pl-10 ">
            <div className="">
              <div className="py-12 px-4 ml-4">
                <h1 className="sm:text-xl text-xl font-bold text-justify mb-3">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks.map((link) => (
                    <li key={link.id} className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
        
      </section>
    </div>
  );
};

