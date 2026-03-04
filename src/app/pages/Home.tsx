import { getFeaturedArticles, mockArticles } from '../data/mockNews';
import { FeaturedArticle } from '../components/FeaturedArticle';
import { NewsCard } from '../components/NewsCard';
import { Sidebar } from '../components/Sidebar';

export function Home() {
  const featuredArticles = getFeaturedArticles();
  const mainFeatured = featuredArticles[0];
  const secondaryFeatured = featuredArticles[1];
  const latestArticles = mockArticles.slice(2, 11);

  return (
    <main className="max-w-[1400px] mx-auto px-4 py-8">
      {/* Breaking News Banner */}
      <div className="bg-red-600 text-white px-6 py-3 mb-8 flex items-center gap-4">
        <span className="bg-white text-red-600 px-3 py-1 text-sm uppercase tracking-wide">
          Breaking
        </span>
        <p className="text-sm md:text-base">
          Major Political Summit Announced - World Leaders to Gather Next Month
        </p>
      </div>

      {/* Featured Stories */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        <div className="lg:col-span-2">
          {mainFeatured && <FeaturedArticle article={mainFeatured} size="large" />}
        </div>
        <div>
          {secondaryFeatured && <FeaturedArticle article={secondaryFeatured} size="medium" />}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Articles */}
        <div className="lg:col-span-2">
          <div className="mb-8 pb-4 border-b-2 border-blue-600">
            <h2 className="text-2xl uppercase tracking-wide">Latest News</h2>
          </div>
          
          <div className="space-y-8">
            {latestArticles.map((article) => (
              <div key={article.id} className="pb-8 border-b border-gray-200 last:border-0">
                <NewsCard article={article} variant="horizontal" />
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-8 text-center">
            <button className="bg-blue-600 text-white px-8 py-3 hover:bg-blue-700 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          <Sidebar />
        </div>
      </div>

      {/* Category Grid */}
      <div className="mt-16">
        <div className="mb-8 pb-4 border-b-2 border-blue-600">
          <h2 className="text-2xl uppercase tracking-wide">More Stories</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockArticles.slice(0, 8).map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </main>
  );
}
