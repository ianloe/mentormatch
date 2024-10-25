import { Search, UserCircle } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold text-indigo-600">MentorMatch</h1>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-700 hover:text-indigo-600">Home</a>
            <a href="/mentors" className="text-gray-700 hover:text-indigo-600">Find Mentors</a>
            <a href="/about" className="text-gray-700 hover:text-indigo-600">How It Works</a>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Search className="w-5 h-5 text-gray-600" />
          </button>
          <div className="relative">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center space-x-1 hover:bg-gray-100 p-2 rounded-full"
            >
              <UserCircle className="w-6 h-6 text-gray-600" />
            </button>
            
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                <a href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                <hr className="my-1" />
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}