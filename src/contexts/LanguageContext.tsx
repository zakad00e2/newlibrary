import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    authors: 'Authors',
    books: 'Books',
    publishers: 'Publishers',
    whitePapers: 'White Papers',
    wiki: 'Wiki',
    blog: 'Blog',
    store: 'Store',
    
    // Home page
    heroTitle: 'Discover Your Next Great Read',
    heroSubtitle: 'Explore our curated collection of books, authors, and literary insights',
    faqTitle: 'Frequently Asked Questions',
    
    // Authors page
    authorsTitle: 'Our Authors',
    authorsSubtitle: 'Meet the talented writers behind our collection',
    readMore: 'Read More',
    
    // Books page
    booksTitle: 'Book Collection',
    booksSubtitle: 'Discover stories that inspire and educate',
    viewDetails: 'View Details',
    
    // Publishers page
    publishersTitle: 'Publishing Partners',
    publishersSubtitle: 'Collaborating with industry leaders',
    
    // White Papers page
    whitePapersTitle: 'White Papers',
    whitePapersSubtitle: 'In-depth research and industry insights',
    download: 'Download PDF',
    
    // Wiki page
    wikiTitle: 'Collaborative Wiki',
    wikiSubtitle: 'Share knowledge and insights',
    addEntry: 'Add New Entry',
    edit: 'Edit',
    delete: 'Delete',
    save: 'Save',
    cancel: 'Cancel',
    entryTitle: 'Entry Title',
    entryContent: 'Entry Content',
    
    // Blog page
    blogTitle: 'Latest Articles',
    blogSubtitle: 'Stories, insights, and updates from our community',
    readArticle: 'Read Article',
    
    // Store page
    storeTitle: 'Book Store',
    storeSubtitle: 'Browse our collection of classic and contemporary books',
    buyNow: 'Buy Now',
    price: 'Price',
    category: 'Category',
    
    // Common
    loading: 'Loading...',
    error: 'Error',
    search: 'Search',
    filter: 'Filter',
    sortBy: 'Sort by',
    showMore: 'Show More',
    showLess: 'Show Less',
    
    // Footer
    followUs: 'Follow us on Facebook',
    allRights: 'All rights reserved',
  },
  de: {
    // Navigation
    home: 'Startseite',
    authors: 'Autoren',
    books: 'Bücher',
    publishers: 'Verlage',
    whitePapers: 'Whitepapers',
    wiki: 'Wiki',
    blog: 'Blog',
    store: 'Shop',
    
    // Home page
    heroTitle: 'Entdecken Sie Ihre nächste große Lektüre',
    heroSubtitle: 'Erkunden Sie unsere kuratierte Sammlung von Büchern, Autoren und literarischen Einblicken',
    faqTitle: 'Häufig gestellte Fragen',
    
    // Authors page
    authorsTitle: 'Unsere Autoren',
    authorsSubtitle: 'Lernen Sie die talentierten Schriftsteller hinter unserer Sammlung kennen',
    readMore: 'Weiterlesen',
    
    // Books page
    booksTitle: 'Buchsammlung',
    booksSubtitle: 'Entdecken Sie Geschichten, die inspirieren und bilden',
    viewDetails: 'Details ansehen',
    
    // Publishers page
    publishersTitle: 'Verlagspartner',
    publishersSubtitle: 'Zusammenarbeit mit Branchenführern',
    
    // White Papers page
    whitePapersTitle: 'Whitepapers',
    whitePapersSubtitle: 'Ausführliche Forschung und Brancheneinblicke',
    download: 'PDF herunterladen',
    
    // Wiki page
    wikiTitle: 'Kollaboratives Wiki',
    wikiSubtitle: 'Wissen und Erkenntnisse teilen',
    addEntry: 'Neuen Eintrag hinzufügen',
    edit: 'Bearbeiten',
    delete: 'Löschen',
    save: 'Speichern',
    cancel: 'Abbrechen',
    entryTitle: 'Eintragstitel',
    entryContent: 'Eintragsinhalt',
    
    // Blog page
    blogTitle: 'Neueste Artikel',
    blogSubtitle: 'Geschichten, Einblicke und Updates aus unserer Community',
    readArticle: 'Artikel lesen',
    
    // Store page
    storeTitle: 'Buchhandlung',
    storeSubtitle: 'Durchsuchen Sie unsere Sammlung klassischer und zeitgenössischer Bücher',
    buyNow: 'Jetzt kaufen',
    price: 'Preis',
    category: 'Kategorie',
    
    // Common
    loading: 'Laden...',
    error: 'Fehler',
    search: 'Suchen',
    filter: 'Filter',
    sortBy: 'Sortieren nach',
    showMore: 'Mehr anzeigen',
    showLess: 'Weniger anzeigen',
    
    // Footer
    followUs: 'Folgen Sie uns auf Facebook',
    allRights: 'Alle Rechte vorbehalten',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'de' : 'en'));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
