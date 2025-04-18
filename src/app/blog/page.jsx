import Footer from '@/components/footer/Footer';
import Header from '@/components/resources/Header';
import Main from '@/components/resources/Main';
import getPosts from '@/helpers/contentful';

export const metadata = {
  title: 'Our Blog | Dots Presentations',
  description:
    'Dots Presentation Blog gives you Access to valuable resources to improve your skills. We provide tips and insights to help you create impactful presentations.',
  openGraph: {
    title: 'Our Blog | Dots Presentations',
    description:
      'Dots Presentation Blog gives you Access to valuable resources to improve your skills. We provide tips and insights to help you create impactful presentations.',
    url: 'https://dotspresentations.com/blog',
    siteName: 'Dotspresentaions',
    images: [
      {
        url: 'https://dotspresentations.com/images/resourcesog.jpeg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Blog | Dots Presentations',
    description:
      'Dots Presentation Blog gives you Access to valuable resources to improve your skills. We provide tips and insights to help you create impactful presentations.',
    creator: '@dotsppts',
    images: ['https://dotspresentations.com/images/resourcesog.jpeg'],
  },
  alternates: {
    canonical: '/blog',
  },
};

async function blog() {
  const { posts } = await getPosts();
  return (
    <>
      <Header />
      <Main posts={posts} />
      <Footer />
    </>
  );
}

export default blog;
