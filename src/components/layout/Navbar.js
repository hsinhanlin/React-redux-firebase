import React from 'react';
import { Link } from 'react-router-dom';
import SignInLinks from './SignInLinks';

const Navbar = () => {
  return(
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link exact to="/" className="brand-logo">Brand</Link>
        <SignInLinks></SignInLinks>
      </div>
    </nav>
  )
}
 
export default Navbar;