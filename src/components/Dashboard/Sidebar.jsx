import { NavLink } from "react-router";
import {
  FaThLarge,
  FaBriefcase,
  FaBookmark,
  FaFileAlt,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard/candidateDashboard",
    icon: <FaThLarge />,
  },
  {
    name: "Find Jobs",
    path: "/findJobs",
    icon: <FaBriefcase />,
  },
  {
    name: "Saved Jobs",
    path: "/dashboard/savedJobs",
    icon: <FaBookmark />,
  },
  {
    name: "My Applications",
    path: "/dashboard/applications",
    icon: <FaFileAlt />,
  },
  {
    name: "My Profile",
    path: "/dashboard/profile",
    icon: <FaUser />,
  },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}

      <aside
        className={`
          fixed md:sticky
          top-0 left-0
          z-50
          h-screen
          w-72
          bg-white
          border-r border-slate-200
          flex flex-col
          transition-transform duration-300 ease-in-out
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
        `}
      >
        {/* Logo */}

        <div className="h-20 px-6 flex items-center justify-between border-b border-slate-100">

          <div>
            <h1 className="text-2xl font-bold text-blue-600">
              HireHox
            </h1>

            <p className="text-xs text-slate-400 mt-1">
              Candidate Dashboard
            </p>
          </div>

          {/* Mobile Close */}

          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden w-9 h-9 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition"
          >
            <FaTimes />
          </button>

        </div>

        {/* Navigation */}

        <nav className="flex-1 px-4 py-6 overflow-y-auto">

          <p className="px-3 mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Menu
          </p>

          <div className="space-y-1">

            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `
                  flex items-center gap-4
                  px-4 py-3.5
                  rounded-xl
                  font-medium
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                      : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                  }
                  `
                }
              >
                <span className="text-lg">
                  {item.icon}
                </span>

                <span>
                  {item.name}
                </span>
              </NavLink>
            ))}

          </div>

          {/* Account */}

          <p className="px-3 mt-8 mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Account
          </p>

          <div className="space-y-1">

            <NavLink
              to="/dashboard/settings"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `
                flex items-center gap-4
                px-4 py-3.5
                rounded-xl
                font-medium
                transition-all duration-200
                ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                }
                `
              }
            >
              <FaCog className="text-lg" />
              Settings
            </NavLink>

          </div>

        </nav>

        {/* User Card */}

        <div className="p-4 border-t border-slate-100">

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">

            <div className="w-11 h-11 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
              IB
            </div>

            <div className="flex-1 min-w-0">

              <h3 className="font-semibold text-sm text-slate-800 truncate">
                Iffat Bari
              </h3>

              <p className="text-xs text-slate-400 truncate">
                Candidate
              </p>

            </div>

            <button
              title="Logout"
              className="w-9 h-9 rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-500 transition flex items-center justify-center"
            >
              <FaSignOutAlt />
            </button>

          </div>

        </div>

      </aside>
    </>
  );
};

export default Sidebar;