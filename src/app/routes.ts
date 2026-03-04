import { createBrowserRouter } from 'react-router';
import { RootLayout } from './layout/RootLayout';
import { Home } from './pages/Home';
import { NewsSection } from './pages/NewsSection';
import { ArticlePage } from './pages/ArticlePage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: 'news', Component: NewsSection },
      { path: 'sport', Component: NewsSection },
      { path: 'showbiz', Component: NewsSection },
      { path: 'health', Component: NewsSection },
      { path: 'science', Component: NewsSection },
      { path: 'money', Component: NewsSection },
      { path: 'travel', Component: NewsSection },
      { path: 'fashion', Component: NewsSection },
      { path: 'food', Component: NewsSection },
      { path: 'article/:id', Component: ArticlePage },
    ],
  },
]);
