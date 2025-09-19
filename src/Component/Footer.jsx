import React from "react";
import {
  EmailIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "./svgicons/SocialIcons";

const Footer = () => {
  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      const topOffset = section.offsetTop - 50;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  }
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        {/* Social Icons - Top Section */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 mb-8">
          <a
            href="mailto:adityamishra2348@gmail.com"
            className="flex items-center justify-center w-12 h-12 text-white rounded-full hover:shadow-lg transition-all"
          >
            <EmailIcon className="w-6 h-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/aditya-mishra-335288246/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 text-white rounded-full hover:shadow-lg transition-all"
          >
            <LinkedInIcon className="w-6 h-6" />
          </a>

          <a
            href="https://github.com/adityarajmishraji"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 text-white rounded-full hover:shadow-lg transition-all"
          >
            <GithubIcon className="w-6 h-6" />
          </a>

          <a
            href="https://www.instagram.com/adi_mishra_111/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 text-white rounded-full hover:shadow-lg transition-all"
          >
            <InstagramIcon className="w-6 h-6" />
          </a>
        </div>

        {/* Navigation Links - Middle Section */}
        <div className="flex justify-center">
          <ul className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-center text-sm md:text-base">
            <li
              onClick={() => scrollToSection("home")}
              className="hover:text-blue-500 transition-colors cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => scrollToSection("technologies")}
              className="hover:text-blue-500 transition-colors cursor-pointer"
            >
              Technologies
            </li>
            <li
              onClick={() => scrollToSection("education")}
              className="hover:text-blue-500 transition-colors cursor-pointer"
            >
              Education
            </li>
            <li
              onClick={() => scrollToSection("projects")}
              className="hover:text-blue-500 transition-colors cursor-pointer"
            >
              Projects
            </li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1mhs0pvgpwzjuHVI5gn44KPVvdBwc3XH3/view?usp=drive_link"
            >
              <li className="hover:text-blue-500 transition-colors cursor-pointer">
                Resume
              </li>
            </a>
          </ul>
        </div>

        {/* Copyright - Bottom Section */}
        <div className="text-center text-sm text-gray-400 mt-6">
          Copyright &copy; 2025; Designed by  Developed by Aditya Mishra
          For a better user experience, use Chrome or Firefox.
          <span className="tracking-wide uppercase font-semibold text-white">
            {" "}
            A-R-M ❤️
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
