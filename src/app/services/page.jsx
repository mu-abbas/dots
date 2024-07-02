import Footer from '@/components/footer/Footer';
import Header from '@/components/services/Header';
import Main from '@/components/services/Main';

export const metadata = {
  title: 'Services',
  description:
    'Explore our comprehensive presentation design services, including custom presentations, templates, pitch decks, and document design. Elevate your communication and captivate your audience with visually stunning slides.',
  openGraph: {
    title: 'Services - Dots Presentations',
    description: `Explore our comprehensive presentation design services, including custom presentations, templates, pitch decks, and document design. Elevate your communication and captivate your audience with visually stunning slides.`,
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
    title: 'Services - Dots Presentations',
    description: `Explore our comprehensive presentation design services, including custom presentations, templates, pitch decks, and document design. Elevate your communication and captivate your audience with visually stunning slides.`,
    creator: '@dotsppts',
    images: ['https://dotspresentations.com/images/servicesog.jpeg'],
  },
};

function Services() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default Services;
