import Footer from '@/components/footer/Footer';
import Header from '@/components/presentation-templates/Header';
import Main from '@/components/presentation-templates/Main';

export const metadata = {
  title: 'Professional Presentation Templates',
  description:
    'Discover our professionally designed presentation templates. Save time and ensure consistency with templates tailored to your brand and communication needs.',
  openGraph: {
    title: 'Professional Presentation Templates | Dots Presentations',
    description: `Discover our professionally designed presentation templates. Save time and ensure consistency with templates tailored to your brand and communication needs.`,
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
    title: 'Professional Presentation Templates | Dots Presentations',
    description: `Discover our professionally designed presentation templates. Save time and ensure consistency with templates tailored to your brand and communication needs.`,
    creator: '@dotsppts',
    images: ['https://dotspresentations.com/images/templatesog.jpeg'],
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
