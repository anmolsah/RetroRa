import React from "react";
import FooterLink from "./FooterLink";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <h3 className="font-press-start text-nein-pink text-sm mb-4">
              NAVIGATION
            </h3>
            <nav className="flex flex-col space-y-2">
              <FooterLink href="#home">HOME</FooterLink>
              <FooterLink href="#projects">PROJECTS</FooterLink>
              <FooterLink href="#skills">SKILLS</FooterLink>
              <FooterLink href="#contact">CONTACT</FooterLink>
            </nav>
          </div>
          <div className="text-center">
            <div className="flex justify-center space-x-6">
              <FooterLink href="https://github.com/anmolsah">
                <Github className="w-6 h-6" />
              </FooterLink>
              <FooterLink href="https://x.com/anni_i29">
                <Twitter className="w-6 h-6" />
              </FooterLink>
              <FooterLink href="https://www.linkedin.com/in/anmol-sah-551083238/">
                <Linkedin className="w-6 h-6" />
              </FooterLink>
            </div>
            <p className="mt-4 text-gray-400 font-ibm text-sm">
              © {currentYear} ANMOL_SAH. ALL RIGHTS RESERVED
            </p>
          </div>

          <div className="text-center md:text-right">
            <h3 className="font-press-start text-neon-cyan text-sm mb-4">
              STATUS
            </h3>
            <div className="space-x-2 font-ibm text-sm">
              <p className="text-gray-400">UPTIME: 99.9%</p>
              <p className="text-gray-400">LOCATION: SILIGURI_CITY_001</p>
              <p className="text-neon-pink">SYSTEM: ONLINE</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
