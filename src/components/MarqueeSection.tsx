import { BookOpen, BookMarked, Library, Book, Newspaper, FileText, Scroll, BookA } from 'lucide-react';

const MarqueeSection = () => {
  const logos = [
    { icon: BookOpen, name: 'BookOpen' },
    { icon: BookMarked, name: 'BookMarked' },
    { icon: Library, name: 'Library' },
    { icon: Book, name: 'Book' },
    { icon: Newspaper, name: 'Newspaper' },
    { icon: FileText, name: 'FileText' },
    { icon: Scroll, name: 'Scroll' },
    { icon: BookA, name: 'BookA' },
  ];

  return (
    <div className="bg-secondary py-6 overflow-hidden">
      <div className="flex animate-marquee">
        {/* First set */}
        {logos.map((logo, index) => (
          <div key={`logo-1-${index}`} className="flex-shrink-0 mx-8">
            <logo.icon className="w-8 h-8 text-foreground" />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {logos.map((logo, index) => (
          <div key={`logo-2-${index}`} className="flex-shrink-0 mx-8">
            <logo.icon className="w-8 h-8 text-foreground" />
          </div>
        ))}
        {/* Third set for seamless loop */}
        {logos.map((logo, index) => (
          <div key={`logo-3-${index}`} className="flex-shrink-0 mx-8">
            <logo.icon className="w-8 h-8 text-foreground" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSection;
