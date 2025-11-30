import { Link } from 'react-router-dom';
import { Facebook } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { path: '/', label: t('home') },
    { path: '/books', label: t('books') },
    { path: '/authors', label: t('authors') },
    
    { path: '/publishers', label: t('publishers') },
    // { path: '/white-papers', label: t('whitePapers') },
    { path: '/wiki', label: t('wiki') },
    { path: '/blog', label: t('blog') },
    { path: '/store', label: t('store') },
  ];

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('followUs')}</h3>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Facebook className="w-5 h-5" />
              <span>Facebook</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} khalil alsmadi. {t('allRights')}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
