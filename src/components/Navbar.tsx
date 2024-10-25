import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Search, UserPlus, User } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Users className="h-6 w-6" />
            <span className="font-bold text-xl">MentorMatch</span>
          </Link>
          <div className="flex space-x-6">
            <Link to="/search" className="flex items-center space-x-1 hover:text-indigo-200">
              <Search className="h-5 w-5" />
              <span>Find Mentor</span>
            </Link>
            <Link to="/register" className="flex items-center space-x-1 hover:text-indigo-200">
              <UserPlus className="h-5 w-5" />
              <span>Become Mentor</span>
            </Link>
            <Link to="/profile" className="flex items-center space-x-1 hover:text-indigo-200">
              <User className="h-5 w-5" />
              <span>Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;