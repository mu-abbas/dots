import Footer from '@/components/footer/Footer';
import Header from '@/components/retainership/Header';
import Main from '@/components/retainership/Main';

export const metadata = {
  title: 'Presentation Design Retainership',
  description:
    'Ensure ongoing presentation excellence with our retainership services. Benefit from continuous support, regular updates, and priority service to keep your presentations top-notch.',
  openGraph: {
    title: 'Presentation Design Retainership | Dots Presentations',
    description:
      'Ensure ongoing presentation excellence with our retainership services. Benefit from continuous support, regular updates, and priority service to keep your presentations top-notch.',
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
      'Ensure ongoing presentation excellence with our retainership services. Benefit from continuous support, regular updates, and priority service to keep your presentations top-notch.',
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
