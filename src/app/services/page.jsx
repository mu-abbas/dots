import Footer from '@/components/footer/Footer';
import Header from '@/components/services/Header';
import Main from '@/components/services/Main';
import getPosts from '@/helpers/contentful';

export const metadata = {
  title: 'Best Presentation Design Services',
  description:
    'Dots offers you the Best Presentation Design Service. We use our creativity, expertise, and passion to connect the dots and bring your stories to life.',
  openGraph: {
    title: 'Best Presentation Design Services | Dots Presentations',
    description: `Dots offers you the Best Presentation Design Service. We use our creativity, expertise, and passion to connect the dots and bring your stories to life.`,
    url: 'https://dotspresentations.com/services/',
    siteName: 'Dotspresentaions',
    images: [
      {
        url: 'https://dotspresentations.com/images/servicesog.jpeg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Presentation Design Services | Dots Presentations',
    description: `Dots offers you the Best Presentation Design Service. We use our creativity, expertise, and passion to connect the dots and bring your stories to life.`,
    creator: '@dotsppts',
    images: ['https://dotspresentations.com/images/servicesog.jpeg'],
  },
  alternates: {
    canonical: '/services',
  },
};

async function Services() {
  const { posts } = await getPosts();
  return (
    <>
      <Header />
      <Main posts={posts} />
      <Footer />
    </>
  );
}

export default Services;
