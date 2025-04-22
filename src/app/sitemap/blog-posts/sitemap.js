import getPosts from '@/helpers/contentful';

const BASE_URL = 'https://dotspresentations.com';

export default async function sitemap() {
  const { posts } = await getPosts();
  const staticPages = posts.map(post => post.href);

  return staticPages.map(path => ({
    url: `${BASE_URL}/blog/${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 1,
  }));
}
