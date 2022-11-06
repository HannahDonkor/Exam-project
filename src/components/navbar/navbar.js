import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
  return (
    <nav>
        <div className='nav-box'>
            <span className='my-shop'>COUNTER</span>
            <Link to={'/'}><span className='nav-link'>Home</span></Link>
            <Link to={'/error'}><span className='nav-link'>Score</span></Link>
            
        </div>
    </nav>
  );
}

export default Navbar;