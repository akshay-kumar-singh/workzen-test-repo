import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 bg-gray-100">
      <div className="flex items-center">
        <Link to="/" className="text-lg font-bold mr-4">Home</Link>
        <Link to="/about" className="text-lg font-bold mr-4">About</Link>
        <Link to="/contact" className="text-lg font-bold mr-4">Contact Us</Link>
      </div>
      <div className="flex items-center">
        <Link to="/login" className="text-lg font-bold mr-4">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;