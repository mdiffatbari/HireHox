import React from 'react';
import { Button } from '../ui/button';
import { NavLink } from 'react-router';
import "./navbar.css"


const Navbar = () => {


return (
  <nav>
    <div className='py-5'>
      <div className='flex w-11/12 mx-auto items-center justify-between'>
        <div className="navbar-first">
          <h1 className='text-2xl font-bold'>Hirehox</h1>
        </div>
        <div className="navbar-middle">
          <ul className='flex gap-8 font-semibold'>

            <li className='hover:text-blue-600'>
              <NavLink className="menu-item" to="/">Home</NavLink>
            </li>
            
            <li className='hover:text-blue-600'>
              <NavLink className="menu-item" to="/findJobs">Find Jobs</NavLink>
            </li>

            <li className='hover:text-blue-600'>
              <NavLink className="menu-item" to="/blogs">Blog</NavLink>
            </li>

            <li className='hover:text-blue-600'>
              <NavLink className="menu-item" to="/contact">Contact Us</NavLink>
            </li>

          </ul>
        </div>
        <div className="navbar-lst">
          <Button>Sign Up</Button>
        </div>
      </div>
    </div>
  </nav>
);
};

export default Navbar;