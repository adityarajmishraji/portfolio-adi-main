import React, { memo } from "react";
import {
  LinkedInIcon,
  EmailIcon,
  InstagramIcon,
  GithubIcon,
} from "./SocialIcons";

const SocialLink = memo(({ href, icon: Icon }) => (
  <li className="md:w-7 w-5 hover:text-white transition-colors duration-200">
    <a target="_blank" href={href} rel="noopener noreferrer">
      <Icon />
    </a>
  </li>
));

const SocialLinks = memo(() => (
  <ul className="ml-auto md:mr-4 mr-3 space-y-5 text-[#b0b2c3] absolute right-1 md:right-4">
    <SocialLink
      href="https://www.linkedin.com/in/aditya-mishra-335288246/"
      icon={LinkedInIcon}
    />
    <SocialLink href="https://github.com/adityarajmishraji" icon={GithubIcon} />
    <SocialLink href="mailto:adityamishra2348@gmail.com" icon={EmailIcon} />
    <SocialLink
      href="https://www.instagram.com/adi_mishra_111/"
      icon={InstagramIcon}
    />
  </ul>
));

export default SocialLinks;
