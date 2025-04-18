import Header from '@/components/about-us/Header';
import Main from '@/components/about-us/Main';
import Footer from '@/components/footer/Footer';

export const metadata = {
  title: 'About Dots Presentations',
  description: `Meet the experts, Connecting the Dots to your success. At Dots Presentation, we don't just craft slides, we craft experiences! That is driven by Core Values.`,
  openGraph: {
    title: 'About Dots Presentations | Presentation Design Experts',
    description: `Meet the experts, Connecting the Dots to your success. At Dots Presentation, we don't just craft slides, we craft experiences! That is driven by Core Values.`,
    url: 'https://dotspresentations.com/about-us',
    siteName: 'Dotspresentaions',
    images: [
      {
        url: 'https://dotspresentations.com/images/aboutusog.jpeg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Dots Presentations | Presentation Design Experts',
    description: `Meet the experts, Connecting the Dots to your success. At Dots Presentation, we don't just craft slides, we craft experiences! That is driven by Core Values.`,
    creator: '@dotsppts',
    images: ['https://dotspresentations.com/images/aboutusog.jpeg'],
  },
  alternates: {
    canonical: '/about-us',
  },
};

function AboutUs() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default AboutUs;
