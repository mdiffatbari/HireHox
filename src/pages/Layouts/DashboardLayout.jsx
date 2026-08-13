import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";
import { Sidebar } from "lucide-react";
import { Outlet } from "react-router";


const DashboardLayout = () => {
    return (
        <div>
            <DashboardNavbar></DashboardNavbar>
            <div className="flex">
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;