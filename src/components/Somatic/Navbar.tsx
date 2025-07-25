'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Challenge', href: '#challenge' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
];

function handleNavClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string, setMenuOpen: (open: boolean) => void) {
  if (href.startsWith('#')) {
    e.preventDefault();
    const id = href.slice(1);
    const el = id ? document.getElementById(id) : document.body;
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  }
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-primary-50 via-background-50 to-secondary-50 backdrop-blur-md fixed top-0 left-0 z-50 border-b border-text-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-18">
        {/* Logo */}
        <Link href="#" className="flex items-center font-extrabold text-3xl text-primary-700 flex-shrink-0">
          <img src='/lifemoves.webp' alt='LifeMoves' className='h-12 w-auto sm:h-14 md:h-16 lg:h-18 object-contain' />
        </Link>
        {/* Desktop Nav Links Centered */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-10">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-text-500 hover:text-text-900 font-medium text-lg transition-colors duration-200 font-body"
              onClick={e => handleNavClick(e, link.href, () => {})}
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* Join Button Desktop */}
        <div className="hidden md:block ml-6">
          <a
            href="#join"
            className="bg-text-900 text-background-50 px-8 py-3 rounded-full font-medium hover:bg-text-800 transition-colors text-lg shadow-lg"
          >
            Join
          </a>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-7 h-7 text-text-900" /> : <Menu className="w-7 h-7 text-text-900" />}
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-background-50/95 border-t border-text-100 shadow-xl">
          <div className="flex flex-col gap-3 px-6 py-6">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-text-700 font-semibold py-3 px-4 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200 font-body"
                onClick={e => handleNavClick(e, link.href, setMenuOpen)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#join"
              className="mt-6 bg-text-900 text-background-50 px-8 py-4 rounded-full font-medium hover:bg-text-800 transition-colors text-lg text-center shadow-lg"
              onClick={() => setMenuOpen(false)}
            >
              Join
            </a>
          </div>
        </div>
      )}
    </nav>
  );
} 