import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between">
      <div className="flex items-center">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/about" className="mr-4">About</Link>
        <Link to="/contact" className="mr-4">Contact Us</Link>
      </div>
      <div className="flex items-center">
        <Link to="/login" className="mr-4">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;