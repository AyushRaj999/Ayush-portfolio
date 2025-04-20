import React, { useState } from 'react';
import Logo from '../assets/name logo.png';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className='sticky top-0 z-50 w-full bg-background/95 border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:px-0'>
      <div className='max-w-7xl mx-auto flex h-14 items-center'>
        <div className='md:mr-4 flex justify-between w-full'>
          <a href="#" className='mr-6 flex items-center space-x-2'>
            <img src={Logo} alt='Logo' className='w-36 mt-3' />
          </a>
          <nav className='md:flex hidden items-center space-x-6 text-lg font-medium mt-6'>
            <a href="#hero" className='transition-colors hover:text-foreground/80 text-foreground-60'>Home</a>
            <a href="#about" className='transition-colors hover:text-foreground/80 text-foreground-60'>About</a>
            <a href="#skills" className='transition-colors hover:text-foreground/80 text-foreground-60'>Skills</a>
            <a href="#projects" className='transition-colors hover:text-foreground/80 text-foreground-60'>Projects</a>
            <a href="#contact" className='transition-colors hover:text-foreground/80 text-foreground-60'>Contact</a>
          </nav>
        </div>
        <button
          className='inline-flex items-center justify-center rounded-md md:hidden'
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className='sr-only'>Open main menu</span>
          {mobileMenuOpen ? (
            <X className='h-6 w-6' aria-hidden='true' />
          ) : (
            <Menu className='h-6 w-6' aria-hidden='true' />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className='space-y-1 px-2 pb-3 pt-2 md:hidden'>
          <a href="#hero" onClick={handleMobileMenuClose} className='block py-2 px-3 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'>Home</a>
          <a href="#about" onClick={handleMobileMenuClose} className='block py-2 px-3 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'>About</a>
          <a href="#skills" onClick={handleMobileMenuClose} className='block py-2 px-3 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'>Skills</a>
          <a href="#projects" onClick={handleMobileMenuClose} className='block py-2 px-3 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'>Projects</a>
          <a href="#contact" onClick={handleMobileMenuClose} className='block py-2 px-3 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'>Contact</a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
