import { useState } from 'react';
import { Mail, Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

interface NavbarProps {
  onContactOpen: () => void;
}

const navLinks = [
  { label: 'FASHION', section: 'fashion' },
  { label: 'ACTING', section: 'acting' },
  { label: 'FILM MAKING', section: 'filmmaking' },
  { label: 'PODCAST', section: 'podcast' },
];

export default function Navbar({ onContactOpen }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-30 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl tracking-wider"
          >
            DEIRDRE LORENZ
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map(({ label, section }) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-sm tracking-wide hover:text-gray-600 transition-colors"
              >
                {label}
              </button>
            ))}
            <button
              onClick={onContactOpen}
              className="text-sm tracking-wide hover:text-gray-600 transition-colors flex items-center gap-2"
            >
              <Mail size={16} />
              CONTACT
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="md:hidden"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 space-y-3"
          >
            {navLinks.map(({ label, section }) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left text-sm tracking-wide hover:text-gray-600 transition-colors py-2"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => {
                onContactOpen();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 w-full text-left text-sm tracking-wide hover:text-gray-600 transition-colors py-2"
            >
              <Mail size={16} />
              CONTACT
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
