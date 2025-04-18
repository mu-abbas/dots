import Footer from '@/components/footer/Footer';
import Header from '@/components/retainership/Header';
import Main from '@/components/retainership/Main';

export const metadata = {
  title: 'Presentation Design Retainership',
  description:
    'Dots Presentation Retainership. Efficient Delivery Every Time!. Our designers are experts in all presentation software, ensuring you have the best service.',
  openGraph: {
    title: 'Presentation Design Retainership | Dots Presentations',
    description:
      'Dots Presentation Retainership. Efficient Delivery Every Time!. Our designers are experts in all presentation software, ensuring you have the best service.',
    url: 'https://dotspresentations.com/retainership',
    siteName: 'Dotspresentaions',
    images: [
      {
        url: 'https://dotspresentations.com/images/retainershipog.jpeg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Presentation Design Retainership | Dots Presentations',
    description:
      'Dots Presentation Retainership. Efficient Delivery Every Time!. Our designers are experts in all presentation software, ensuring you have the best service.',
    creator: '@dotsppts',
    images: ['https://dotspresentations.com/images/retainershipog.jpeg'],
  },
  alternates: {
    canonical: '/retainership',
  },
};
function Retainership() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default Retainership;
