import { Link } from 'react-router';
import { NewsArticle } from '../types/news';
import { Clock } from 'lucide-react';

interface FeaturedArticleProps {
  article: NewsArticle;
  size?: 'large' | 'medium';
}

export function FeaturedArticle({ article, size = 'large' }: FeaturedArticleProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const heightClass = size === 'large' ? 'h-[500px]' : 'h-[350px]';
  const titleClass = size === 'large' ? 'text-4xl' : 'text-2xl';

  return (
    <Link to={`/article/${article.id}`} className="group block">
      <article className={`relative overflow-hidden ${heightClass}`}>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-4xl">
            <span className="inline-block bg-red-600 px-3 py-1 text-sm uppercase tracking-wide mb-4">
              {article.category}
            </span>
            <h2 className={`${titleClass} mb-4 group-hover:text-blue-400 transition-colors`}>
              {article.title}
            </h2>
            <p className="text-lg text-gray-200 mb-4 line-clamp-2">
              {article.summary}
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <span>{article.author}</span>
              <span>•</span>
              <span>{formatDate(article.publishedAt)}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
