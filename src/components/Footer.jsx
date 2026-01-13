import React from "react";
import { FaGithub, FaXTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center items-center gap-6">
      <a
        href="https://github.com/nnadijoshuac"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#915EFF] transition-colors"
      >
        <FaGithub size={24} />
      </a>
      <a 
        href="https://x.com/nnadijoshuac" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-[#915EFF] transition-colors"
      >
        <FaXTwitter size={24} />
      </a>
      <a
        href="https://instagram.com/nnadijoshuac"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#915EFF] transition-colors"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://linkedin.com/in/nnadijoshuac"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#915EFF] transition-colors"
      >
        <FaLinkedin size={24} />
      </a>
    </footer>
  );
};

export default Footer;