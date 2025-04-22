import projectsPages from '@/data/projectsPages';

const BASE_URL = 'https://dotspresentations.com';
const staticPages = projectsPages.map(project => project.href);

export default function sitemap() {
  return staticPages.map(path => ({
    url: `${BASE_URL}/our-work/${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));
}
