import { NewsArticle } from '../types/news';

export const mockArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Breaking: Major Political Summit Announced for Next Month',
    summary: 'World leaders to gather for historic climate and economic discussions in unprecedented meeting that could reshape global policy.',
    image: 'https://images.unsplash.com/photo-1645976442368-b2d3fd315932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xpdGljcyUyMGdvdmVybm1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzI1NDE1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'News',
    author: 'Sarah Mitchell',
    publishedAt: '2026-03-04T10:30:00Z',
    readTime: '5 min',
    featured: true,
    content: 'In a stunning development that has caught the attention of the international community...'
  },
  {
    id: '2',
    title: 'Championship Team Secures Dramatic Victory in Final Minutes',
    summary: 'Last-minute goal sends fans into frenzy as underdog team clinches spot in playoffs with stunning comeback.',
    image: 'https://images.unsplash.com/photo-1764050359179-517599dab87b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBzdGFkaXVtJTIwYXRobGV0ZXN8ZW58MXx8fHwxNzcyNjI3MzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Sport',
    author: 'Mike Johnson',
    publishedAt: '2026-03-04T09:15:00Z',
    readTime: '4 min',
    featured: true
  },
  {
    id: '3',
    title: 'Hollywood Stars Dazzle at Premiere of Blockbuster Film',
    summary: 'A-list celebrities grace red carpet in designer gowns as highly anticipated movie finally hits theaters.',
    image: 'https://images.unsplash.com/photo-1614115866447-c9a299154650?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnRhaW5tZW50JTIwY2VsZWJyaXR5JTIwcmVkJTIwY2FycGV0fGVufDF8fHx8MTc3MjYyNzM0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Showbiz',
    author: 'Emma Roberts',
    publishedAt: '2026-03-04T08:45:00Z',
    readTime: '6 min'
  },
  {
    id: '4',
    title: 'Tech Giant Unveils Revolutionary AI-Powered Device',
    summary: 'New gadget promises to transform daily life with groundbreaking features and innovative design.',
    image: 'https://images.unsplash.com/photo-1685708525394-8824dc35c671?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZ2FkZ2V0cyUyMGlubm92YXRpb258ZW58MXx8fHwxNzcyNjI3MzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Science',
    author: 'David Chen',
    publishedAt: '2026-03-04T07:30:00Z',
    readTime: '7 min'
  },
  {
    id: '5',
    title: 'Stock Market Reaches Record High Amid Economic Optimism',
    summary: 'Investors celebrate as markets surge on positive economic data and strong corporate earnings.',
    image: 'https://images.unsplash.com/photo-1659824297493-b847196704a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGZpbmFuY2UlMjBjaXR5c2NhcGV8ZW58MXx8fHwxNzcyNTk3OTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Money',
    author: 'Jennifer Lee',
    publishedAt: '2026-03-04T06:20:00Z',
    readTime: '5 min'
  },
  {
    id: '6',
    title: 'Breakthrough Study Reveals New Benefits of Mediterranean Diet',
    summary: 'Research shows dramatic improvements in heart health and longevity for those following traditional eating patterns.',
    image: 'https://images.unsplash.com/photo-1759476532819-e37ac3d05cff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBmaXRuZXNzJTIwd2VsbG5lc3N8ZW58MXx8fHwxNzcyNTQxNTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Health',
    author: 'Dr. Rachel Green',
    publishedAt: '2026-03-03T18:00:00Z',
    readTime: '8 min'
  },
  {
    id: '7',
    title: 'Paradise Found: Hidden Beaches That Rival the Caribbean',
    summary: 'Discover these stunning, lesser-known destinations that offer crystal-clear waters without the crowds.',
    image: 'https://images.unsplash.com/photo-1761239956289-c0b8180fea0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkZXN0aW5hdGlvbiUyMGJlYWNofGVufDF8fHx8MTc3MjU1ODQ4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Travel',
    author: 'Tom Wilson',
    publishedAt: '2026-03-03T16:30:00Z',
    readTime: '10 min'
  },
  {
    id: '8',
    title: 'Fashion Week 2026: The Trends Everyone Will Be Wearing',
    summary: 'From bold colors to sustainable fabrics, here are the styles dominating the runways this season.',
    image: 'https://images.unsplash.com/photo-1762430815620-fcca603c240c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcnVud2F5JTIwbW9kZWx8ZW58MXx8fHwxNzcyNTI3NzAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Fashion',
    author: 'Sophia Martinez',
    publishedAt: '2026-03-03T15:00:00Z',
    readTime: '6 min'
  },
  {
    id: '9',
    title: 'Michelin-Star Chef Shares Secret to Perfect Pasta at Home',
    summary: 'Learn the techniques professionals use to create restaurant-quality Italian cuisine in your own kitchen.',
    image: 'https://images.unsplash.com/photo-1655194166473-1a1506b278f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwY29va2luZyUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzcyNjI3MzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Food',
    author: 'Chef Marco Rossi',
    publishedAt: '2026-03-03T14:15:00Z',
    readTime: '12 min'
  },
  {
    id: '10',
    title: 'Severe Weather Warning Issued for Multiple States',
    summary: 'Meteorologists warn of dangerous storm system bringing heavy rain and potential flooding this weekend.',
    image: 'https://images.unsplash.com/photo-1653058221377-96690fa50146?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwc3Rvcm0lMjBjbG91ZHN8ZW58MXx8fHwxNzcyNjI0MjE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'News',
    author: 'Weather Team',
    publishedAt: '2026-03-03T13:00:00Z',
    readTime: '3 min'
  },
  {
    id: '11',
    title: 'Scientists Make Groundbreaking Discovery in Cancer Research',
    summary: 'New treatment approach shows promising results in clinical trials, offering hope to millions.',
    image: 'https://images.unsplash.com/photo-1707944746058-4da338d0f827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHJlc2VhcmNofGVufDF8fHx8MTc3MjU2MTA5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Science',
    author: 'Dr. Amanda Foster',
    publishedAt: '2026-03-03T11:30:00Z',
    readTime: '9 min'
  },
  {
    id: '12',
    title: 'Breaking News: Major Development in Ongoing Investigation',
    summary: 'Authorities announce significant breakthrough as new evidence comes to light in high-profile case.',
    image: 'https://images.unsplash.com/photo-1622223145461-271074da3e20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2luZyUyMG5ld3MlMjByZXBvcnRlcnxlbnwxfHx8fDE3NzI2MTM1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'News',
    author: 'Breaking News Team',
    publishedAt: '2026-03-04T11:00:00Z',
    readTime: '4 min'
  }
];

export const getArticlesByCategory = (category: string): NewsArticle[] => {
  if (category === 'Home') return mockArticles;
  return mockArticles.filter(article => article.category === category);
};

export const getFeaturedArticles = (): NewsArticle[] => {
  return mockArticles.filter(article => article.featured);
};

export const getArticleById = (id: string): NewsArticle | undefined => {
  return mockArticles.find(article => article.id === id);
};
