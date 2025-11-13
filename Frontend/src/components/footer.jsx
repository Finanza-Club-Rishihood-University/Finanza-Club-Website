import React from 'react';
import { Instagram, Linkedin, Github, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Finanza Section */}
          <div>
            <h3 className="text-2xl font-bold text-[#C0003D] mb-6 relative inline-block">
              Finanza
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></div>
            </h3>
            <p className="text-white text-sm leading-relaxed mb-6">
              Rishihood University's Official Finance<br />& Investment Club
            </p>
            <div className="flex gap-4">
              <a href="#" className="social-icon text-white hover:text-[#C0003D] transition-all duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="social-icon text-white hover:text-[#C0003D] transition-all duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="social-icon text-white hover:text-[#C0003D] transition-all duration-300">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="social-icon text-white hover:text-[#C0003D] transition-all duration-300">
                <Youtube className="w-6 h-6" />
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
              <li><a href="#" className="hover:text-[#C0003D] transition-colors">Event</a></li>
              <li><a href="#" className="hover:text-[#C0003D] transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-[#C0003D] transition-colors">Blogs</a></li>
              <li><a href="#" className="hover:text-[#C0003D] transition-colors">members</a></li>
              <li><a href="#" className="hover:text-[#C0003D] transition-colors">About</a></li>
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
              <button 
                className="px-6 py-2.5 rounded-md bg-[#C0003D] text-white text-sm font-semibold hover:bg-[#a00033] transition-colors whitespace-nowrap"
              >
                Contact now
              </button>
            </div>
            <div className="text-white text-sm space-y-1">
              <p>Rishihood University, NH-44, Delhi</p>
              <p>NCR, Sonipat, Haryana,</p>
              <p>India-131021</p>
              <p className="mt-3">finanza@rishihood.edu.in</p>
            </div>
          </div>
        </div>

        {/* Large Finanza Image as Background - Hidden on Mobile */}
        <div className="hidden md:block ">
          <img 
            src="../../public/FooterImg.png" 
            alt="Finanza" 
            className="w-full h-auto object-cover"
          />
        </div>

        
      </div>

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