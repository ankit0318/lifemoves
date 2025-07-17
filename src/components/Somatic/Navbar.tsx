import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Challenge', href: '#challenge' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Join', href: '#join' },
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
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2 font-extrabold text-xl text-indigo-700">
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">LifeMoves</span>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 font-semibold hover:text-indigo-600 transition-colors duration-200"
              onClick={e => handleNavClick(e, link.href, () => {})}
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
          </div>
        </div>
      )}
    </nav>
  );
} 