import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="w-11/12 mx-auto h-20 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/">
          <h1 className="text-2xl font-bold">HireHox</h1>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 font-semibold">
          <li>
            <NavLink className="menu-item" to="/">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink className="menu-item" to="/findJobs">
              Find Jobs
            </NavLink>
          </li>

          <li>
            <NavLink className="menu-item" to="/blogs">
              Blog
            </NavLink>
          </li>

          <li>
            <NavLink className="menu-item" to="/contact">
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <NavLink to="/login"><Button className="cursor-pointer" variant="outline">Login</Button></NavLink>
          <NavLink to="/register"><Button className="cursor-pointer">Sign Up</Button></NavLink>
        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <ul className="flex flex-col py-4">
            <li>
              <NavLink
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-3"
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-3"
                to="/findJobs"
              >
                Find Jobs
              </NavLink>
            </li>

            <li>
              <NavLink
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-3"
                to="/blogs"
              >
                Blog
              </NavLink>
            </li>

            <li>
              <NavLink
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-3"
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li>

            <div className="flex flex-col gap-3 p-6">
              <NavLink to="/login"><Button className="cursor-pointer" variant="outline">Login</Button></NavLink>
              <NavLink className="w-full" to="/register"><Button>Sign Up</Button></NavLink>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;