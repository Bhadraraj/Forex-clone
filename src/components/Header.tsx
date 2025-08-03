import React from 'react';
import { Search, Menu, BarChart3, Bell, Settings } from 'lucide-react';

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 px-4 py-3 sticky top-0 z-40">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Button */}
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100/50 transition-colors"
          >
            <Menu size={20} className="text-gray-600" />
          </button>

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <BarChart3 size={18} className="text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800 hidden sm:block">ZForex</span>
          </div>
        </div>

        {/* Center - Search Bar */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-white/60 backdrop-blur-md border border-gray-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-700 placeholder-gray-400"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <kbd className="px-2 py-1 text-xs text-gray-400 bg-gray-100/50 rounded border border-gray-200/50">⌘K</kbd>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3">
          {/* Notifications */}
          <button className="p-2 rounded-lg hover:bg-gray-100/50 transition-colors relative">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>

          {/* Settings */}
          <button className="p-2 rounded-lg hover:bg-gray-100/50 transition-colors">
            <Settings size={20} className="text-gray-600" />
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-gray-800">DIVYESH Katariya</p>
              <p className="text-xs text-gray-500">katariyadvvu8200@gmail.com</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center ring-2 ring-blue-200/50">
              <span className="text-white font-semibold text-sm">DK</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;