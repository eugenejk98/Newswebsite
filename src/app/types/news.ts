export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  image: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  featured?: boolean;
  content?: string;
}

export const newsCategories = [
  'Home',
  'News',
  'Sport',
  'Showbiz',
  'Health',
  'Science',
  'Money',
  'Travel',
  'Fashion',
  'Food'
] as const;

export type NewsCategory = typeof newsCategories[number];
