import React from 'react';

import './navbar.css';

const Navbar = () => {
  return (
    <nav>
        <div className='nav-box'>
            <span className='my-shop'>COUNTER</span>
            <span className='nav-link'>Home</span>
            <span className='nav-link'>Score</span>
            
        </div>
    </nav>
  );
}

export default Navbar;