import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a1e]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-white">
            CodeVerse
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/courses" className="text-gray-300 hover:text-white transition">
              Courses
            </Link>
            <Link to="/leaderboard" className="text-gray-300 hover:text-white transition">
              Leaderboard
            </Link>
            <Link to="/profile" className="text-gray-300 hover:text-white transition">
              Profile
            </Link>
            <Button variant="primary" size="sm">
              Sign In
            </Button>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/courses"
              className="block px-3 py-2 text-gray-300 hover:text-white transition"
            >
              Courses
            </Link>
            <Link
              to="/leaderboard"
              className="block px-3 py-2 text-gray-300 hover:text-white transition"
            >
              Leaderboard
            </Link>
            <Link
              to="/profile"
              className="block px-3 py-2 text-gray-300 hover:text-white transition"
            >
              Profile
            </Link>
            <div className="px-3 py-2">
              <Button variant="primary" size="sm" className="w-full">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;