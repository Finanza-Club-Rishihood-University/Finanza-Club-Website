import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo / Title */}
          <h1 className="font-heading text-2xl font-bold tracking-wide" style={{ color: '#C0003D' }}>Finanza Club</h1>

          {/* Navigation Links */}
          <div className="flex gap-8 font-body text-sm font-medium">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              style={{ color: '#C0003D' }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              style={{ color: '#C0003D' }}
            >
              About
            </Link>
            <Link
              to="/events"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              style={{ color: '#C0003D' }}
            >
              Events
            </Link>
            <Link
              to="/members"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              style={{ color: '#C0003D' }}
            >
              Members
            </Link>
            <Link
              to="/newsletters"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              style={{ color: '#C0003D' }}
            >
              Newsletters
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}