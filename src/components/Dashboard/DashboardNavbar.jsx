import {
  FaBars,
  FaSearch,
  FaBell,
  FaChevronDown,
} from "react-icons/fa";

const DashboardNavbar = ({ onMenuClick }) => {
  return (
    <header className="sticky top-0 z-30 h-16 md:h-20 bg-white border-b border-slate-200">

      <div className="h-full px-4 md:px-6 lg:px-8 flex items-center justify-between gap-4">

        {/* Left Side */}

        <div className="flex items-center gap-4">

          {/* Mobile Menu Button */}

          <button
            onClick={onMenuClick}
            className="md:hidden w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition"
          >
            <FaBars />
          </button>

          {/* Page Title */}

          <div>
            <h1 className="text-lg md:text-xl font-bold text-slate-900">
              Dashboard
            </h1>

            <p className="hidden sm:block text-xs text-slate-400">
              Manage your job search
            </p>
          </div>

        </div>

        {/* Center Search */}

        <div className="hidden lg:block flex-1 max-w-md">

          <div className="relative">

            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />

            <input
              type="text"
              placeholder="Search jobs..."
              className="
                w-full
                rounded-xl
                border border-slate-200
                bg-slate-50
                py-3
                pl-11
                pr-4
                text-sm
                outline-none
                transition
                focus:border-blue-500
                focus:bg-white
              "
            />

          </div>

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-3 md:gap-5">

          {/* Mobile Search */}

          <button
            className="
              lg:hidden
              w-10 h-10
              rounded-xl
              bg-slate-100
              text-slate-500
              flex items-center justify-center
              hover:bg-blue-50
              hover:text-blue-600
              transition
            "
          >
            <FaSearch />
          </button>

          {/* Notification */}

          <button
            className="
              relative
              w-10 h-10
              rounded-xl
              bg-slate-100
              text-slate-500
              flex items-center justify-center
              hover:bg-blue-50
              hover:text-blue-600
              transition
            "
          >
            <FaBell />

            {/* Notification Badge */}

            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
              3
            </span>
          </button>

          {/* Divider */}

          <div className="hidden sm:block h-8 w-px bg-slate-200"></div>

          {/* Profile */}

          <button className="flex items-center gap-3">

            {/* Avatar */}

            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
              IB
            </div>

            {/* User Info */}

            <div className="hidden md:block text-left">

              <h3 className="text-sm font-semibold text-slate-800">
                Iffat Bari
              </h3>

              <p className="text-xs text-slate-400">
                Candidate
              </p>

            </div>

            <FaChevronDown className="hidden md:block text-xs text-slate-400" />

          </button>

        </div>

      </div>

    </header>
  );
};

export default DashboardNavbar;