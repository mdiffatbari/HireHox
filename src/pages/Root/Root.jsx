import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;