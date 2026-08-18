import { use, useEffect, useState, useRef } from "react";
import { Button } from "../ui/button";
import { NavLink, useNavigate } from "react-router";
import { Menu, X, ChevronDown, LayoutDashboard, LogOut } from "lucide-react";
import { AuthContext } from "@/contexts/AuthContext";
import logo from "../../assets/logo.png"
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const { user, signOutUser } = use(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        setDropdownOpen(false);
        navigate("/login");
      })
      .catch((err) => console.error(err));
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-lg shadow-md"
          : "bg-white"
      }`}
    >
      <div className="w-10/12 mx-auto h-20 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/">
          {/* <h1 className="text-2xl font-bold">HireHox</h1> */}
          <img src={logo} alt="" />
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

        {/* Desktop Buttons / User */}
        <div className="hidden lg:flex items-center gap-3">
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <img
                  src={user.photoURL || "/default-avatar.png"}
                  alt={user.displayName || "User"}
                  className="w-10 h-10 rounded-full object-cover border"
                />
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-white rounded-md shadow-lg border py-2 z-50">
                  <div className="px-4 py-2 border-b">
                    <p className="text-sm font-semibold truncate">
                      {user.displayName || "User"}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {user.email}
                    </p>
                  </div>

                  <NavLink
                    to="/dashboard"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                  >
                    <LayoutDashboard size={16} />
                    Dashboard
                  </NavLink>

                  <button
                    onClick={handleLogOut}
                    className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-left text-red-500 cursor-pointer"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <NavLink to="/login">
                <Button className="cursor-pointer" variant="outline">
                  Login
                </Button>
              </NavLink>
              <NavLink to="/register">
                <Button className="cursor-pointer">Sign Up</Button>
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile Button */}
        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
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
              {user ? (
                <>
                  <div className="flex items-center gap-3 px-2">
                    <img
                      src={user.photoURL || "/default-avatar.png"}
                      alt={user.displayName || "User"}
                      className="w-10 h-10 rounded-full object-cover border"
                    />
                    <div>
                      <p className="text-sm font-semibold truncate">
                        {user.displayName || "User"}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {user.email}
                      </p>
                    </div>
                  </div>

                  <NavLink
                    to="/dashboard"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 px-2"
                  >
                    <LayoutDashboard size={16} />
                    Dashboard
                  </NavLink>

                  <button
                    onClick={() => {
                      handleLogOut();
                      setMenuOpen(false);
                    }}
                    className="flex items-center gap-2 px-2 text-red-500 text-left cursor-pointer"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink to="/login">
                    <Button className="cursor-pointer" variant="outline">
                      Login
                    </Button>
                  </NavLink>
                  <NavLink className="w-full" to="/register">
                    <Button>Sign Up</Button>
                  </NavLink>
                </>
              )}
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;