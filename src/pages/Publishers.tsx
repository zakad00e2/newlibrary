import { useLanguage } from '@/contexts/LanguageContext';
import { publishersData } from '@/data/sampleData';
import Footer from '@/components/Footer';

const Publishers = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-background py-8 px-4">
        <div className="container-custom">
          <h1 className="text-2xl md:text-3xl font-bold text-text-bright mb-1">
            {t('publishersTitle')}
          </h1>
          <p className="text-sm md:text-base text-text-muted">
            {t('publishersSubtitle')}
          </p>
        </div>
      </section>

      {/* Publishers Grid */}
      <section className="py-1 px-4">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {publishersData.map((publisher) => (
              <div
                key={publisher.id}
                className="bg-card rounded-xl p-8 border border-border card-hover text-center"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden bg-secondary">
                  <img
                    src={publisher.logo}
                    alt={publisher.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-text-bright">
                  {publisher.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {publisher.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Publishers;
