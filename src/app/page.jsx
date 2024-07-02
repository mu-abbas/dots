import Footer from '@/components/footer/Footer';
import Header from '@/components/home/Header';
import Main from '@/components/home/Main';

export const metadata = {
  title: 'Professional Presentation Design Services | Dots Presentations',
  description:
    'Transform your presentations with Dots Presentations. We offer professional, time-saving, and competitively priced presentation design services to help you tell your story effectively and impress your audience.',
  openGraph: {
    title: 'Professional Presentation Design Services | Dots Presentations',
    description: `Transform your presentations with Dots Presentations. We offer professional, time-saving, and competitively priced presentation design services to help you tell your story effectively and impress your audience.`,
    url: 'https://dotspresentations.com/',
    siteName: 'Dotspresentaions',
    images: [
      {
        url: 'https://dotspresentations.com/images/homeog.jpeg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Presentation Design Services | Dots Presentations',
    description: `Transform your presentations with Dots Presentations. We offer professional, time-saving, and competitively priced presentation design services to help you tell your story effectively and impress your audience.`,
    creator: '@dotsppts',
    images: ['https://dotspresentations.com/images/homeog.jpeg'],
  },
};

function HomePage() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default HomePage;
