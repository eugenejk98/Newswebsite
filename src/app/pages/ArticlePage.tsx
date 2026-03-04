import { useParams, Link } from 'react-router';
import { getArticleById, mockArticles } from '../data/mockNews';
import { Clock, Share2, Bookmark, ArrowLeft } from 'lucide-react';
import { Sidebar } from '../components/Sidebar';
import { NewsCard } from '../components/NewsCard';

export function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const article = id ? getArticleById(id) : undefined;
  const relatedArticles = mockArticles.slice(0, 4);

  if (!article) {
    return (
      <main className="max-w-[1400px] mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl mb-4">Article Not Found</h1>
        <Link to="/" className="text-blue-600 hover:underline">
          Return to Home
        </Link>
      </main>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <main className="max-w-[1400px] mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:underline">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Article Content */}
        <article className="lg:col-span-2">
          {/* Category */}
          <div className="mb-4">
            <span className="inline-block bg-blue-600 text-white px-3 py-1 text-sm uppercase tracking-wide">
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {article.summary}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 pb-6 mb-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full" />
              <div>
                <p className="text-sm">By {article.author}</p>
                <p className="text-xs text-gray-500">{formatDate(article.publishedAt)}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-500 ml-auto">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </div>
          </div>

          {/* Social Actions */}
          <div className="flex gap-3 mb-8">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 transition-colors">
              <Share2 className="w-4 h-4" />
              Share
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 transition-colors">
              <Bookmark className="w-4 h-4" />
              Save
            </button>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-auto"
            />
            <p className="text-sm text-gray-500 mt-2">
              Image caption describing the photograph
            </p>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              In a significant development that has captured global attention, experts are weighing in on the implications of recent events. The situation continues to evolve, with new information emerging that sheds light on the complexities involved.
            </p>
            <p className="mb-6">
              According to sources close to the matter, the impact of these developments extends far beyond initial expectations. Stakeholders from various sectors are closely monitoring the situation, preparing for potential changes that could reshape the landscape in meaningful ways.
            </p>
            <p className="mb-6">
              "This represents a pivotal moment," said one expert familiar with the situation. "The decisions made now will have lasting consequences that we're only beginning to understand."
            </p>
            <p className="mb-6">
              As the story continues to unfold, officials have emphasized the importance of staying informed and understanding the full context. Multiple perspectives have emerged, each offering valuable insights into the various factors at play.
            </p>
            <p className="mb-6">
              The broader implications reach across multiple domains, affecting policy, practice, and public perception. Analysts suggest that this could mark a turning point, setting precedents that will influence future approaches to similar challenges.
            </p>
            <p className="mb-6">
              Looking ahead, observers note that much remains uncertain. However, the fundamental questions raised by these events demand serious consideration and thoughtful response from all involved parties.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-6 border-t border-gray-200">
            <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 px-3 py-1 text-sm hover:bg-gray-200 cursor-pointer">
                {article.category}
              </span>
              <span className="bg-gray-100 px-3 py-1 text-sm hover:bg-gray-200 cursor-pointer">
                Breaking News
              </span>
              <span className="bg-gray-100 px-3 py-1 text-sm hover:bg-gray-200 cursor-pointer">
                Featured
              </span>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12 pt-8 border-t-2 border-gray-200">
            <h2 className="text-2xl uppercase tracking-wide mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <NewsCard key={relatedArticle.id} article={relatedArticle} />
              ))}
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <div>
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
