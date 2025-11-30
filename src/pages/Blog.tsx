import { Calendar, User, Clock, Tag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { blogPostsData } from '@/data/sampleData';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      {/* <section className="pt-8 x-4 ">
        <div className="container-custom max-w-4xl">
          <h1 className="text-2xl md:text-3xl font-bold mb-1">{t('blogTitle')}</h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl">{t('blogSubtitle')}</p>
        </div>
      </section> */}

      {/* Blog Posts Grid */}
      <section className="py-6 px-4">
        <div className="container-custom max-w-4xl">
          <div className="space-y-6">
            {blogPostsData.map((post) => (
              <article
                key={post.id}
                className="bg-card rounded-lg border border-border hover:border-primary/30 transition-all"
              >
                {/* Post Header */}
                <div className="p-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm">{post.author}</h3>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-4">
                  <h2 className="text-lg md:text-xl font-bold mb-3 text-foreground">
                    {post.title}
                  </h2>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
