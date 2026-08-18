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
  FaPlus,
  FaUsers,
  FaBuilding,
} from "react-icons/fa";

const candidateMenu = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <FaThLarge />,
  },
  {
    name: "Find Jobs",
    path: "/findJobs",
    icon: <FaBriefcase />,
  },
  {
    name: "Saved Jobs",
    path: "/dashboard/savedjobs",
    icon: <FaBookmark />,
  },
  {
    name: "My Applications",
    path: "/dashboard/myapplications",
    icon: <FaFileAlt />,
  },
  {
    name: "My Profile",
    path: "/dashboard/profile",
    icon: <FaUser />,
  },
];

const employerMenu = [
  {
    name: "Employer Dashboard",
    path: "/dashboard/employerDashboard",
    icon: <FaThLarge />,
  },
  {
    name: "Post a Job",
    path: "/dashboard/postjobs",
    icon: <FaPlus />,
  },
  {
    name: "Manage Jobs",
    path: "/dashboard/employer/manageJobs",
    icon: <FaBriefcase />,
  },
  {
    name: "Applicants",
    path: "/dashboard/employer/applicants",
    icon: <FaUsers />,
  },
  {
    name: "Company Profile",
    path: "/dashboard/employer/companyProfile",
    icon: <FaBuilding />,
  },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* ================= MOBILE OVERLAY ================= */}

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}

      {/* ================= SIDEBAR ================= */}

      <aside
        className={`
          fixed md:sticky
          top-0 left-0
          z-50
          h-screen
          w-72
          shrink-0
          bg-white
          border-r border-slate-200
          flex flex-col
          transition-transform
          duration-300
          ease-in-out

          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
        `}
      >

        {/* ================= LOGO ================= */}

        <div className="h-20 px-6 flex items-center justify-between border-b border-slate-100">

          <div>
            <NavLink to="/">
              <h1 className="text-2xl font-bold text-blue-600">
              HireHox
            </h1>
            </NavLink>

            <p className="text-xs text-slate-400 mt-1">
              Dashboard
            </p>
          </div>

          {/* Mobile Close Button */}

          <button
            onClick={() => setIsOpen(false)}
            className="
              md:hidden
              w-9 h-9
              rounded-lg
              bg-slate-100
              text-slate-500
              flex
              items-center
              justify-center
              hover:bg-slate-200
              transition
            "
          >
            <FaTimes />
          </button>

        </div>

        {/* ================= NAVIGATION ================= */}

        <nav className="flex-1 px-4 py-6 overflow-y-auto">

          {/* ================= CANDIDATE ================= */}

          <p className="
            px-3
            mb-3
            text-xs
            font-semibold
            uppercase
            tracking-wider
            text-slate-400
          ">
            Candidate
          </p>

          <div className="space-y-1">

            {candidateMenu.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/dashboard"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `
                  flex
                  items-center
                  gap-4
                  px-4
                  py-3.5
                  rounded-xl
                  font-medium
                  transition-all
                  duration-200

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

          {/* ================= EMPLOYER ================= */}

          <p className="
            px-3
            mt-8
            mb-3
            text-xs
            font-semibold
            uppercase
            tracking-wider
            text-slate-400
          ">
            Employer
          </p>

          <div className="space-y-1">

            {employerMenu.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/dashboard/employerDashboard"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `
                  flex
                  items-center
                  gap-4
                  px-4
                  py-3.5
                  rounded-xl
                  font-medium
                  transition-all
                  duration-200

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

          {/* ================= ACCOUNT ================= */}

          <p className="
            px-3
            mt-8
            mb-3
            text-xs
            font-semibold
            uppercase
            tracking-wider
            text-slate-400
          ">
            Account
          </p>

          <NavLink
            to="/dashboard/settings"
            end
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `
              flex
              items-center
              gap-4
              px-4
              py-3.5
              rounded-xl
              font-medium
              transition-all
              duration-200

              ${
                isActive
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                  : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
              }
              `
            }
          >
            <FaCog className="text-lg" />

            <span>
              Settings
            </span>
          </NavLink>

        </nav>

        {/* ================= USER CARD ================= */}

        <div className="p-4 border-t border-slate-100">

          <div className="
            flex
            items-center
            gap-3
            p-3
            rounded-xl
            bg-slate-50
          ">

            {/* Avatar */}

            <div className="
              w-11
              h-11
              shrink-0
              rounded-full
              bg-blue-100
              text-blue-600
              flex
              items-center
              justify-center
              font-bold
            ">
              IB
            </div>

            {/* User Information */}

            <div className="flex-1 min-w-0">

              <h3 className="
                font-semibold
                text-sm
                text-slate-800
                truncate
              ">
                Iffat Bari
              </h3>

              <p className="
                text-xs
                text-slate-400
                truncate
              ">
                User
              </p>

            </div>

            {/* Logout */}

            <button
              title="Logout"
              className="
                w-9
                h-9
                shrink-0
                rounded-lg
                text-slate-400
                hover:bg-red-50
                hover:text-red-500
                transition
                flex
                items-center
                justify-center
              "
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