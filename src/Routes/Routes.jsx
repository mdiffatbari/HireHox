import Blogs from '@/pages/Blogs/Blogs';
import Contact from '@/pages/Contact/Contact';
import Errorpage from '@/pages/Errorpage/Errorpage';
import FindJobs from '@/pages/FindJobs/FindJobs';
import Home from '@/pages/Home/Home';
import LogIn from '@/pages/LogIn/LogIn';
import Register from '@/pages/Register/Register';
import MainLayout from '@/pages/Layouts/MainLayout';
import { createBrowserRouter } from "react-router";
import DashboardLayout from '@/pages/Layouts/DashboardLayout';
import Dashboard from '@/pages/Dashboard/Dashboard';
import Profile from '@/pages/Dashboard/Candidate/Profile';
import SavedJob from '@/pages/Dashboard/Candidate/SavedJob';
import MyApplications from '@/pages/Dashboard/Candidate/MyApplications';
import PostJobs from '@/pages/Dashboard/Employer/PostJobs/PostJobs';
import Applicants from '@/pages/Dashboard/Employer/Applicants/Applicants';

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Errorpage></Errorpage>,
    Component: MainLayout,
    children: [
      {
        index: true,
        path: "/",
        Component: Home
      },
      {
        path: "/findJobs",
        Component: FindJobs
      },
      {
        path: "/blogs",
        Component: Blogs
      },
      {
        path: "/contact",
        Component: Contact
      },
      {
        path: "register",
        Component: Register
      },
      {
        path: "/login",
        Component: LogIn
      }
    ]
  },
  //dashboard routes
  {
    path:"/dashboard",
    Component: DashboardLayout,
    children: [
      {
        index: true,
        path:"/dashboard",
        Component: Dashboard
      },
      {
        path: "/dashboard/profile",
        Component: Profile
      },
      {
        path: "/dashboard/savedjobs",
        Component: SavedJob
      },
      {
        path: "/dashboard/myapplications",
        Component: MyApplications
      },
      {
        path: "/dashboard/postjobs",
        Component: PostJobs
      },
      {
        path: "/dashboard/applicants",
        Component: Applicants
      }
    ]
  }
]);