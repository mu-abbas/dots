import Footer from '@/components/footer/Footer';
import Header from '@/components/presentation-design/Header';
import Main from '@/components/presentation-design/Main';

export const metadata = {
  title: 'Custom Presentation Design',
  description:
    'Get bespoke presentation designs tailored to your brand and message. Our expert designers create visually appealing, easy-to-follow slides that connect with your audience.',
  openGraph: {
    title: 'Custom Presentation Design | Dots Presentations ',
    description: `Get bespoke presentation designs tailored to your brand and message. Our expert designers create visually appealing, easy-to-follow slides that connect with your audience.`,
    url: 'https://dotspresentations.com/services/presentation-design/',
    siteName: 'Dotspresentaions',
    images: [
      {
        url: 'https://dotspresentations.com/images/presentationog.jpeg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Presentation Design | Dots Presentations ',
    description: `Get bespoke presentation designs tailored to your brand and message. Our expert designers create visually appealing, easy-to-follow slides that connect with your audience.`,
    creator: '@dotsppts',
    images: ['https://dotspresentations.com/images/presentationog.jpeg'],
  },
};

function PresentationDesign() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default PresentationDesign;
