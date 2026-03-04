import { Link } from 'react-router';
import { Menu, Search, User } from 'lucide-react';
import { newsCategories } from '../types/news';

export function Header() {
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-1">
        <div className="max-w-[1400px] mx-auto px-4 flex justify-between items-center text-sm">
          <div>{today}</div>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Subscribe</a>
            <a href="#" className="hover:underline">Newsletter</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-[1400px] mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <button className="lg:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>
          
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-3xl md:text-4xl font-black tracking-tight">
              <span className="text-blue-600">DAILY</span>
              <span className="text-gray-900">NEWS</span>
            </h1>
          </Link>

          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4">
          <ul className="flex overflow-x-auto gap-6 py-3 text-sm whitespace-nowrap">
            {newsCategories.map((category) => (
              <li key={category}>
                <Link
                  to={category === 'Home' ? '/' : `/${category.toLowerCase()}`}
                  className="hover:text-blue-600 transition-colors uppercase tracking-wide"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
