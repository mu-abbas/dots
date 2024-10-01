import Header from '@/components/about-us/Header';
import Main from '@/components/about-us/Main';
import Footer from '@/components/footer/Footer';

export const metadata = {
  title: 'About Dots Presentations',
  description: `Learn more about Dots Presentations, our mission, and our team of expert designers. Discover how we help clients tell their stories and achieve their presentation goals.`,
  openGraph: {
    title: 'About Dots Presentations | Presentation Design Experts',
    description:
      'Learn more about Dots Presentations, our mission, and our team of expert designers. Discover how we help clients tell their stories and achieve their presentation goals.',
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
    description:
      'Learn more about Dots Presentations, our mission, and our team of expert designers. Discover how we help clients tell their stories and achieve their presentation goals.',
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
