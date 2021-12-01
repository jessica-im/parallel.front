import { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


const Nav = () => {

     return (
          <nav>
               <h3>Logo</h3>
               <ul className="nav-links">
                    <Link to="/about" className="navStyle">
                         <li>About</li>
                    </Link>
                    <Link to="/shop" className="navStyle">
                         <li>Shop</li>
                    </Link>
               </ul>
          </nav>
     );
}

export default Nav;
