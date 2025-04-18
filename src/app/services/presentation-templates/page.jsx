import Footer from '@/components/footer/Footer';
import Header from '@/components/presentation-templates/Header';
import Main from '@/components/presentation-templates/Main';

export const metadata = {
  title: 'Presentation Templates Service',
  description:
    'Dots Presentation Templates Service ensures your presentations are visually appealing and polished, helping you convey your message effectively.',
  openGraph: {
    title: 'Presentation Templates Service | Dots Presentations',
    description: `Dots Presentation Templates Service ensures your presentations are visually appealing and polished, helping you convey your message effectively.`,
    url: 'https://dotspresentations.com/services/presentation-templates/',
    siteName: 'Dotspresentaions',
    images: [
      {
        url: 'https://dotspresentations.com/images/templatesog.jpeg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Presentation Templates Service | Dots Presentations',
    description: `Dots Presentation Templates Service ensures your presentations are visually appealing and polished, helping you convey your message effectively.`,
    creator: '@dotsppts',
    images: ['https://dotspresentations.com/images/templatesog.jpeg'],
  },
  alternates: {
    canonical: '/services/presentation-templates',
  },
};

function PresentationTemplates() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default PresentationTemplates;
