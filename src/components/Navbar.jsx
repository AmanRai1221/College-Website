import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, BookOpen } from "lucide-react";

import logo from "../assets/kdmchrc-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Departments", path: "/departments" },
    { name: "Courses", path: "/courses" },
    { name: "Infrastructure", path: "/infrastructure" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white shadow-lg py-4 transition-all duration-300">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img
            src={logo}
            alt="KDC University Logo"
            className="h-17 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-bold uppercase tracking-wide transition-colors duration-300 hover:text-university-orange
                ${location.pathname === link.path ? "text-university-orange" : "text-university-blue"}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/admissions"
            className="px-6 py-2.5 bg-university-orange hover:bg-university-maroon text-white font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-university-orange"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 animate-fade-in">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 font-medium hover:text-university-maroon"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/admissions"
              onClick={() => setIsOpen(false)}
              className="px-6 py-3 bg-university-maroon text-white text-center font-semibold rounded-lg"
            >
              Apply For Admission
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
