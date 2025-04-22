const BASE_URL = 'https://dotspresentations.com';
const staticPages = ['static/sitemap.xml', 'our-work/sitemap.xml', 'blog-posts/sitemap.xml'];

export default function sitemap() {
  return staticPages.map(path => ({
    url: `${BASE_URL}/sitemap/${path}`,
    lastModified: new Date().toISOString(),
  }));
}
