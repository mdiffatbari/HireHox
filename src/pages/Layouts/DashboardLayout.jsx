import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";
import Sidebar from "@/components/Dashboard/Sidebar";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Dashboard Navbar */}
      <DashboardNavbar />

      <div className="flex">

        {/* Sidebar */}
        <Sidebar />

        {/* Dashboard Page */}
        <main className="flex-1 min-w-0 p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;