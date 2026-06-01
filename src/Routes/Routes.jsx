import Blogs from '@/pages/Blogs/Blogs';
import Contact from '@/pages/Contact/Contact';
import Errorpage from '@/pages/Errorpage/Errorpage';
import FindJobs from '@/pages/FindJobs/FindJobs';
import Home from '@/pages/Home/Home';
import Root from '@/pages/Root/Root';
import React from 'react';
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Errorpage></Errorpage>,
    Component: Root,
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
      }
    ]
  },
]);