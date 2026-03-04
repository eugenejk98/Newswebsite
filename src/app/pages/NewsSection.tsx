import { useParams } from 'react-router';
import { getArticlesByCategory, mockArticles } from '../data/mockNews';
import { NewsCard } from '../components/NewsCard';
import { Sidebar } from '../components/Sidebar';
import { FeaturedArticle } from '../components/FeaturedArticle';

export function NewsSection() {
  const { category } = useParams<{ category: string }>();
  const categoryName = category?.charAt(0).toUpperCase() + category?.slice(1) || 'News';
  const articles = category ? getArticlesByCategory(categoryName) : mockArticles;
  const featuredArticle = articles[0];
  const remainingArticles = articles.slice(1);

  return (
    <main className="max-w-[1400px] mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl uppercase tracking-wide border-b-4 border-blue-600 pb-4 inline-block">
          {categoryName}
        </h1>
      </div>

      {/* Featured Article */}
      {featuredArticle && (
        <div className="mb-12">
          <FeaturedArticle article={featuredArticle} size="large" />
        </div>
      )}

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Articles */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {remainingArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center gap-2">
            <button className="px-4 py-2 border border-gray-300 hover:bg-gray-100">
              Previous
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white">1</button>
            <button className="px-4 py-2 border border-gray-300 hover:bg-gray-100">2</button>
            <button className="px-4 py-2 border border-gray-300 hover:bg-gray-100">3</button>
            <button className="px-4 py-2 border border-gray-300 hover:bg-gray-100">
              Next
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
