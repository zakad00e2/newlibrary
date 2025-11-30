import { useLanguage } from '@/contexts/LanguageContext';
import { booksData } from '@/data/sampleData';
import Footer from '@/components/Footer';

const Books = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-background py-8 px-4">
        <div className="container-custom">
          <h1 className="text-2xl md:text-3xl font-bold text-text-bright mb-1">
            {t('booksTitle')}
          </h1>
          <p className="text-sm md:text-base text-text-muted">
            {t('booksSubtitle')}
          </p>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-1 px-4">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {booksData.map((book) => (
              <div
                key={book.id}
                className="bg-card  rounded-xl overflow-hidden border border-border card-hover group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-text-bright">
                    {book.title}
                  </h3>
                  <p className="text-sm text-primary mb-3">{book.author}</p>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {book.description}
                  </p>
                  <button className="text-primary font-medium hover:underline text-sm">
                    {t('viewDetails')} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Books;
