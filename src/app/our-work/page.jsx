import Footer from '@/components/footer/Footer';
import Header from '@/components/our-work/Header';
import Main from '@/components/our-work/Main';

export const metadata = {
  title: 'Our Portfolio',
  description:
    'Dots Presentation Portfolio is about creating presentations that get you noticed! See how we helped clients achieve their goals with impactful presentations.',
  openGraph: {
    title: 'Our Portfolio | Dots Presentations',
    description:
      'Dots Presentation Portfolio is about creating presentations that get you noticed! See how we helped clients achieve their goals with impactful presentations.',
    url: 'https://dotspresentations.com/our-work',
    siteName: 'Dotspresentaions',
    images: [
      {
        url: 'https://dotspresentations.com/images/ourworkog.jpeg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Portfolio | Dots Presentations',
    description:
      'Dots Presentation Portfolio is about creating presentations that get you noticed! See how we helped clients achieve their goals with impactful presentations.',
    creator: '@dotsppts',
    images: ['https://dotspresentations.com/images/ourworkog.jpeg'],
  },
  alternates: {
    canonical: '/our-work',
  },
};

function OurWork() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default OurWork;
