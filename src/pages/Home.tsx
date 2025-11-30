import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { faqData } from '@/data/sampleData';
import MarqueeSection from '@/components/MarqueeSection';
import Footer from '@/components/Footer';

const Home = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative gradient-hero py-32 px-4 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container-custom text-center animate-fade-in-up relative z-10">
          <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <BookOpen className="w-12 h-12 text-primary-foreground" />
          </div>
          <h1 className="text-text-bright mb-6">
            {t('heroTitle')}
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            {t('heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Marquee Section */}
      <MarqueeSection />

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <h2 className="text-center mb-12 text-text-bright">{t('faqTitle')}</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq) => (
              <div
                key={faq.id}
                className="bg-card rounded-xl border border-border overflow-hidden transition-all duration-300 hover:border-primary"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  {openFaq === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                {openFaq === faq.id && (
                  <div className="px-6 pb-4 text-muted-foreground">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
