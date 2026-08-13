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
        
      }
    ]
  }
]);