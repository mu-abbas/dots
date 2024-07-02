import Footer from '@/components/footer/Footer';
import Header from '@/components/our-work/Header';
import Main from '@/components/our-work/Main';

export const metadata = {
  title: 'Presentation Design Portfolio',
  description:
    'View our portfolio of successful presentation design projects. See how we have helped clients from various industries tell their stories and achieve their goals with impactful presentations.',
  openGraph: {
    title: 'Presentation Design Portfolio | Dots Presentations',
    description:
      'View our portfolio of successful presentation design projects. See how we have helped clients from various industries tell their stories and achieve their goals with impactful presentations.',
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
    title: 'Presentation Design Portfolio | Dots Presentations',
    description:
      'View our portfolio of successful presentation design projects. See how we have helped clients from various industries tell their stories and achieve their goals with impactful presentations.',
    creator: '@dotsppts',
    images: ['https://dotspresentations.com/images/ourworkog.jpeg'],
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
