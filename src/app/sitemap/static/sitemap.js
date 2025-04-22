const BASE_URL = 'https://dotspresentations.com';
const staticPages = [
  ['/', 1],
  ['/about-us', 0.8],
  ['/contact-us', 0.8],
  ['/blog', 1],
  ['/evaluate-your-slide', 0.8],
  ['/our-work', 0.8],
  ['/retainership', 0.8],
  ['/services', 1],
  ['/services/document-design', 1],
  ['/services/pitch-decks', 1],
  ['/services/presentation-design', 1],
  ['/services/presentation-templates', 1],
];

export default function sitemap() {
  return staticPages.map(path => ({
    url: `${BASE_URL}${path[0]}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: path[1],
  }));
}
