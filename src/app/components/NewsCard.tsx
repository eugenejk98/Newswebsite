import { Link } from 'react-router';
import { NewsArticle } from '../types/news';
import { Clock } from 'lucide-react';

interface NewsCardProps {
  article: NewsArticle;
  variant?: 'default' | 'small' | 'horizontal';
}

export function NewsCard({ article, variant = 'default' }: NewsCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  if (variant === 'small') {
    return (
      <Link to={`/article/${article.id}`} className="group block">
        <article className="flex gap-3">
          <img
            src={article.image}
            alt={article.title}
            className="w-24 h-24 object-cover flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-sm leading-tight group-hover:text-blue-600 transition-colors line-clamp-3">
              {article.title}
            </h3>
            <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
              <span>{formatDate(article.publishedAt)}</span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  if (variant === 'horizontal') {
    return (
      <Link to={`/article/${article.id}`} className="group block">
        <article className="flex gap-4">
          <img
            src={article.image}
            alt={article.title}
            className="w-48 h-32 object-cover flex-shrink-0"
          />
          <div className="flex-1">
            <div className="text-xs text-blue-600 uppercase tracking-wide mb-1">
              {article.category}
            </div>
            <h3 className="text-xl mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
              {article.title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2 mb-2">
              {article.summary}
            </p>
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span>{article.author}</span>
              <span>•</span>
              <span>{formatDate(article.publishedAt)}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {article.readTime}
              </span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link to={`/article/${article.id}`} className="group block">
      <article className="h-full flex flex-col">
        <div className="relative overflow-hidden mb-3">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 left-2">
            <span className="bg-blue-600 text-white px-2 py-1 text-xs uppercase tracking-wide">
              {article.category}
            </span>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <h3 className="text-lg mb-2 group-hover:text-blue-600 transition-colors line-clamp-3">
            {article.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2 mb-3 flex-1">
            {article.summary}
          </p>
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span>{article.author}</span>
            <span>•</span>
            <span>{formatDate(article.publishedAt)}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
