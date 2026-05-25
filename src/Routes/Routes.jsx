import Errorpage from '@/pages/Errorpage/Errorpage';
import Home from '@/pages/Home/Home';
import Root from '@/pages/Root/Root';
import React from 'react';
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Errorpage></Errorpage>,
    Component: Root,
    children:[
        {
            index: true,
            path: "/",
            Component: Home
        }
    ]
  },
]);