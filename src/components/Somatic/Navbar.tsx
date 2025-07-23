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
    <nav className="w-full from-indigo-50 via-white to-purple-50 backdrop-blur-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="#" className="flex items-center font-extrabold text-3xl text-indigo-700 flex-shrink-0">
          <img src='/lifemoves.webp' alt='LifeMoves' className='h-10 w-auto sm:h-12 md:h-14 lg:h-16 object-contain' />
        </Link>
        {/* Desktop Nav Links Centered */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-500 hover:text-gray-900 font-medium text-md transition-colors duration-200"
              onClick={e => handleNavClick(e, link.href, () => {})}
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* Join Button Desktop */}
        <div className="hidden md:block ml-4">
          <a
            href="#join"
            className="bg-gray-900 text-white px-6 py-1 rounded-full font-medium hover:bg-gray-800 transition-colors text-lg"
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
          {menuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 border-t border-gray-100 shadow-lg">
          <div className="flex flex-col gap-2 px-4 py-4">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 font-semibold py-2 px-2 rounded hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200"
                onClick={e => handleNavClick(e, link.href, setMenuOpen)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#join"
              className="mt-4 bg-gray-900 text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors text-lg text-center"
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