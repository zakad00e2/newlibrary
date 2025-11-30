import { useLanguage } from '@/contexts/LanguageContext';
import { authorsData } from '@/data/sampleData';
import Footer from '@/components/Footer';

const Authors = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-background py-8 px-4">
        <div className="container-custom">
          <h1 className="text-2xl md:text-3xl font-bold text-text-bright mb-1">
            {t('authorsTitle')}
          </h1>
          <p className="text-sm md:text-base text-text-muted">
            {t('authorsSubtitle')}
          </p>
        </div>
      </section>

      {/* Authors Grid */}
      <section className="py-0 px-4">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {authorsData.map((author) => (
              <div
                key={author.id}
                className="bg-card rounded-xl overflow-hidden border border-border card-hover group"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img
                      src={author.image}
                      alt={author.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h3 className="text-2xl font-bold mb-3 text-text-bright">
                      {author.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {author.bio}
                    </p>
                    {/* <button className="mt-4 text-primary font-medium hover:underline">
                      {t('readMore')} →
                    </button> */}
                  </div>
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

export default Authors;
