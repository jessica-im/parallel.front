import { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


const Nav = () => {

     return (
          <nav>
               <h3><Link to="/" className="navStyle">PARALLEL</Link></h3>
               <ul className="nav-links">
                    <Link to="/login" className="navStyle">
                         <li>Login</li>
                    </Link>
                    <Link to="/shop" className="navStyle">
                         <li>Shop</li>
                    </Link>
               </ul>
          </nav>
     );
}

export default Nav;
