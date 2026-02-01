import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";

import logo from "../assets/kdmchrc-logo.png";

const Footer = () => {
  return (
    <footer className="bg-university-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="KDC Logo" className="h-17 w-auto" />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering the next generation of leaders through world-class
              education, research, and innovation. Join us in shaping the
              future.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="p-2 bg-white/10 rounded-full hover:bg-university-orange hover:text-university-blue transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-university-orange/30 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3 text-gray-300">
              {[
                "About Us",
                "Admissions",
                "Academics",
                "Campus Life",
                "Research",
                "Alumni",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="hover:text-university-orange transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-university-orange rounded-full"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-university-orange/30 pb-2 inline-block">
              Departments
            </h4>
            <ul className="space-y-3 text-gray-300">
              {[
                "Computer Science",
                "Business & Management",
                "Engineering",
                "Medical Sciences",
                "Arts & Humanities",
                "Law",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="hover:text-university-orange transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-university-orange rounded-full"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-university-orange/30 pb-2 inline-block">
              Contact Us
            </h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3 items-start">
                <MapPin
                  className="text-university-orange flex-shrink-0 mt-1"
                  size={20}
                />
                <span>123 University Avenue, Knowledge City, State, 10001</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone
                  className="text-university-orange flex-shrink-0"
                  size={20}
                />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail
                  className="text-university-orange flex-shrink-0"
                  size={20}
                />
                <span>admissions@kdc.edu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} KDC University. All rights
            reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-white">
              Terms of Service
            </Link>
            <Link to="#" className="hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
