// components/Navbar.tsx

import React, { useState, useEffect } from "react";
import Link from "next/link";

import ModeSwtich from "./ModeSwitch";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-4 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-md z-50 rounded-l-full rounded-r-full mx-4 mt-4 flex items-center transition-all duration-500">
      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="hidden sm:flex sm:space-x-8">
              <div className="text-gray-500 dark:text-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium">
                cal.ceo
              </div>
              <Link
                href="/"
                className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Projects
              </Link>
            </div>
          </div>
          <div className="flex items-center">{/* Separator */}</div>
          <div className="border-l border-gray-300 dark:border-gray-700 h-6 mx-4 transition-colors duration-500"></div>
          <div className="">
            <ModeSwtich />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
