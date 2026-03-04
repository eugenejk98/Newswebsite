import { Outlet } from 'react-router';
import { Header } from '../components/Header';

export function RootLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Outlet />
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-[1400px] mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-black mb-4">
                <span className="text-blue-400">DAILY</span>NEWS
              </h3>
              <p className="text-sm text-gray-400">
                Your trusted source for breaking news and in-depth analysis.
              </p>
            </div>
            <div>
              <h4 className="uppercase tracking-wide mb-4 text-sm">Sections</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">News</a></li>
                <li><a href="#" className="hover:text-white">Sport</a></li>
                <li><a href="#" className="hover:text-white">Showbiz</a></li>
                <li><a href="#" className="hover:text-white">Health</a></li>
              </ul>
            </div>
            <div>
              <h4 className="uppercase tracking-wide mb-4 text-sm">About</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Advertise</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Use</a></li>
              </ul>
            </div>
            <div>
              <h4 className="uppercase tracking-wide mb-4 text-sm">Follow Us</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Facebook</a></li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
                <li><a href="#" className="hover:text-white">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 DailyNews. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
