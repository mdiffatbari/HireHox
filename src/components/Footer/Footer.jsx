import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="w-11/12 mx-auto py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold">Hirehox</h2>

            <p className="mt-4 text-gray-400 leading-relaxed">
              Connecting talented professionals with top employers and helping
              companies find the right talent faster.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 transition hover:border-blue-600 hover:bg-blue-600"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 transition hover:border-sky-500 hover:bg-sky-500"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 transition hover:border-pink-600 hover:bg-pink-600"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 transition hover:border-blue-700 hover:bg-blue-700"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 transition hover:border-gray-600 hover:bg-gray-700"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* =======================Company====================== */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">Company</h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/jobs" className="transition hover:text-white">
                  Find Jobs
                </Link>
              </li>

              <li>
                <Link to="/blogs" className="transition hover:text-white">
                  Blogs
                </Link>
              </li>

              <li>
                <Link to="/contact" className="transition hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* ======================Candidates=================== */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">Candidates</h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/" className="transition hover:text-white">
                  Browse Jobs
                </Link>
              </li>

              <li>
                <Link to="/" className="transition hover:text-white">
                  Career Advice
                </Link>
              </li>

              <li>
                <Link to="/" className="transition hover:text-white">
                  Resume Tips
                </Link>
              </li>

              <li>
                <Link to="/" className="transition hover:text-white">
                  Job Alerts
                </Link>
              </li>
            </ul>
          </div>

          {/* ==================Contact==================== */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">Contact</h3>

            <div className="space-y-3 text-gray-400">
              <p>support@hirehox.com</p>
              <p>+1 (555) 123-4567</p>
              <p>Available Monday - Friday</p>
              <p>Remote Worldwide</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-gray-500 md:flex-row">
            <p>
              © {new Date().getFullYear()} Hirehox. All rights reserved.
            </p>

            <div className="flex gap-6">
              <Link to="/" className="hover:text-white">
                Privacy Policy
              </Link>

              <Link to="/" className="hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;