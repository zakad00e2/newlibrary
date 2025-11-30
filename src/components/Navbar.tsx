import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Languages, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: t('home') },
        { path: '/books', label: t('books') },
    { path: '/authors', label: t('authors') },

    { path: '/publishers', label: t('publishers') },
    // { path: '/white-papers', label: t('whitePapers') },
    { path: '/wiki', label: t('wiki') },
    { path: '/blog', label: t('blog') },
    { path: '/store', label: t('store') },
    // { path: '/frontend-cloud', label: t('frontendCloud') },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
            {/* <span className="text-xl font-bold text-foreground">Literarium</span> */}
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-2">
            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-2"
            >
              <Languages className="w-4 h-4" />
              <span className="uppercase font-medium">{language}</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleMenu}
              className="md:hidden"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
