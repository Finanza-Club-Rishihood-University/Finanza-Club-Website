import React from "react";
// import { Instagram, Linkedin, Github, Youtube } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-16">
      <nav className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Finanza Section */}
          <div>
            <h3 className="text-2xl font-bold text-[#C0003D] mb-6 relative inline-block">
              Finanza Club
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></div>
            </h3>
            <p className="text-white text-sm leading-relaxed mb-6">
              Official Finance & Investment Club at Rishihood University
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/finanza-club"
                target="_blank"
                className="social-icon text-white hover:text-[#C0003D] transition-all duration-300"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@FinanzaClub"
                target="_blank"
                className="social-icon text-white hover:text-[#C0003D] transition-all duration-300"
              >
                <IoLogoYoutube className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/finanza.club/"
                target="_blank"
                className="social-icon text-white hover:text-[#C0003D] transition-all duration-300"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/FinanzaClub"
                target="_blank"
                className="social-icon text-white hover:text-[#C0003D] transition-all duration-300"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://www.threads.com/@finanza.club"
                target="_blank"
                className="social-icon text-white hover:text-[#C0003D] transition-all duration-300"
              >
                <FaThreads className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/Finanza-Club-Rishihood-University"
                target="_blank"
                className="social-icon text-white hover:text-[#C0003D] transition-all duration-300"
              >
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold text-[#C0003D] mb-6 relative inline-block">
              Quick Links
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></div>
            </h3>
            <ul className="space-y-3 text-white text-sm">
              <li>
                <a href="#" className="hover:text-[#C0003D] transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C0003D] transition-colors">
                  Newsletters
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C0003D] transition-colors">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C0003D] transition-colors">
                  Members
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C0003D] transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-2xl font-bold text-[#C0003D] mb-6 relative inline-block">
              Contact us
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></div>
            </h3>
            <div className="flex gap-2 mb-6">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-2.5 rounded-md bg-white text-black text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C0003D]"
              />
              <button className="px-6 py-2.5 rounded-md bg-[#C0003D] text-white text-sm font-semibold hover:bg-[#a00033] transition-colors whitespace-nowrap">
                Contact now
              </button>
            </div>
            <div className="text-white text-sm space-y-1">
              <p>Rishihood University, NH-44 (GT Road),</p>
              <p>Delhi NCR, Sonipat,</p>
              <p>Haryana, India 131021</p>
              {/* <p className="mt-3">finanza@rishihood.edu.in</p> */}
              <p className="mt-3">
                <a
                  target="_blank"
                  href="mailto:finanza@rishihood.edu.in"
                  className="hover:text-[#C0003D] transition-colors"
                >
                  finanza@rishihood.edu.in
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Large Finanza Image as Background - Hidden on Mobile */}
        <div className="hidden md:block ">
          <img
            // src="../../public/FooterImg.png"
            src="/finanza-footer.png"
            alt="Finanza Club, Rishihood University"
            className="w-full h-auto object-fill "
            draggable="false"
          />
        </div>
      </nav>

      {/* CSS Animations */}
      <style>{`
        .social-icon {
          display: inline-block;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          transform: scale(1.2) translateY(-3px);
          filter: drop-shadow(0 4px 8px rgba(192, 0, 61, 0.4));
        }

        .social-icon:active {
          transform: scale(1.1) translateY(-2px);
        }
      `}</style>
    </footer>
  );
}
