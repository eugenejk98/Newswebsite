import { TrendingUp } from 'lucide-react';
import { mockArticles } from '../data/mockNews';
import { NewsCard } from './NewsCard';

export function Sidebar() {
  const trendingArticles = mockArticles.slice(0, 5);

  return (
    <aside className="space-y-8">
      {/* Trending Section */}
      <div className="bg-gray-50 p-6">
        <div className="flex items-center gap-2 mb-6 pb-3 border-b-2 border-red-600">
          <TrendingUp className="w-5 h-5 text-red-600" />
          <h2 className="text-xl uppercase tracking-wide">Trending Now</h2>
        </div>
        <div className="space-y-6">
          {trendingArticles.map((article) => (
            <NewsCard key={article.id} article={article} variant="small" />
          ))}
        </div>
      </div>

      {/* Don't Miss Section */}
      <div className="bg-blue-600 text-white p-6">
        <h2 className="text-xl uppercase tracking-wide mb-6 pb-3 border-b-2 border-white">
          Don't Miss
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm mb-2 hover:underline cursor-pointer">
              Exclusive: Inside the World's Most Expensive Hotel
            </h3>
            <p className="text-xs text-blue-100">2h ago</p>
          </div>
          <div className="border-t border-blue-400 pt-4">
            <h3 className="text-sm mb-2 hover:underline cursor-pointer">
              Breaking: New Study Changes Everything We Know
            </h3>
            <p className="text-xs text-blue-100">4h ago</p>
          </div>
          <div className="border-t border-blue-400 pt-4">
            <h3 className="text-sm mb-2 hover:underline cursor-pointer">
              Celebrity Couple Announces Surprise Engagement
            </h3>
            <p className="text-xs text-blue-100">5h ago</p>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-2 border-gray-200 p-6">
        <h2 className="text-xl mb-3 uppercase tracking-wide">Newsletter</h2>
        <p className="text-sm text-gray-600 mb-4">
          Get the latest headlines delivered to your inbox daily
        </p>
        <input
          type="email"
          placeholder="Your email address"
          className="w-full px-4 py-2 border border-gray-300 mb-3 focus:outline-none focus:border-blue-600"
        />
        <button className="w-full bg-blue-600 text-white py-2 hover:bg-blue-700 transition-colors">
          Subscribe
        </button>
      </div>

      {/* Ad Space */}
      <div className="bg-gray-100 p-6 text-center">
        <p className="text-sm text-gray-500 mb-2">ADVERTISEMENT</p>
        <div className="bg-gray-200 h-64 flex items-center justify-center">
          <span className="text-gray-400">Ad Space 300x250</span>
        </div>
      </div>
    </aside>
  );
}
