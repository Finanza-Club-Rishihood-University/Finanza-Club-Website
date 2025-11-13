import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-8 py-3">
        <div className="flex justify-between items-center">
          {/* Logo with border box */}
          <div >
            <h1 className="font-bold text-3xl tracking-tight" style={{ color: '#8B1538' }}>
              Finanza Club 
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-10 font-medium text-base">
            <Link
              to="/events"
              className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
            >
              Events
            </Link>
            <Link
              to="/newsletters"
              className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
            >
              Newsletters
            </Link>
            <Link
              to="/"
              className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
            >
              Blogs
            </Link>
            <Link
              to="/members"
              className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
            >
              Members
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
            >
              About
            </Link>
            
            {/* Contact Us Button */}
            <Link
              to="/contact"
              className="px-6 py-2 rounded-full text-white font-medium transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: '#D2691E' }}
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}