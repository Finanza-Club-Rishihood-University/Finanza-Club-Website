import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Documents", path: "/documents" },
    // { name: "Blogs", path: "/blogs" }, will exist
    { name: "Members", path: "/members" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/20 backdrop-blur-md py-3" : "bg-transparent py-5"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-12 transition-transform duration-300 group-hover:scale-105">
            <img
              className="w-full h-full object-contain drop-shadow-lg"
              src="./finanza-club-square-logo.png"
              alt="Finanza Club"
              draggable="false"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[#C0003D] font-bold text-xl leading-none tracking-wide drop-shadow-md">Finanza</span>
            <span className="text-[#C0003D] font-medium text-lg leading-none tracking-wide drop-shadow-md">Club</span>
          </div>
        </Link>

        {/* Centered Pill Navigation */}
        <div className="hidden md:flex items-center bg-black/20 backdrop-blur-sm rounded-full p-1.5 border border-white/10 shadow-lg">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                    ? "bg-white text-[#C0003D] shadow-sm"
                    : "text-white hover:bg-white/10"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Contact Us Button */}
        <Link
          to="/contact"
          className="hidden md:block bg-white text-[#C0003D] px-6 py-2.5 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button (Placeholder) */}
        <button className="md:hidden text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}