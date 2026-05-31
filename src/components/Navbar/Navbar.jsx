import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router';


const Navbar = () => {


return (
  <nav>
    <div className='py-3'>
      <div className='flex w-11/12 mx-auto items-center justify-between'>
        <div className="navbar-first">
          <h1 className='text-2xl font-bold'>Hirehox</h1>
        </div>
        <div className="navbar-middle">
          <ul className='flex gap-8'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Find Jobs</Link>
            </li>
            <li>
              <Link to="/">Blogs</Link>
            </li>
            <li>
              <Link to="/">Contact us</Link>
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