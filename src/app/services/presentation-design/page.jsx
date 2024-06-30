import Footer from '@/components/footer/Footer';
import Header from '@/components/presentation-design/Header';
import Main from '@/components/presentation-design/Main';

export const metadata = {
  title: 'Presentation Design',
  description:
    'Connect With Your Audience, And Let Your Presentation Pop Our presentation design services are the solution that helps you create Engaging, Flawless, and Effective Presentations. On Budget. On-Time! The power of DOTS The power of DOTS Create Tailored Solutions Especially if you need to create multiple presentations on a regular basis.',
  openGraph: {
    title: 'Presentation Design - DOTS',
    description: `Connect With Your Audience, And Let Your Presentation Pop Our presentation design services are the solution that helps you create Engaging, Flawless, and Effective Presentations. On Budget. On-Time! The power of DOTS The power of DOTS Create Tailored Solutions Especially if you need to create multiple presentations on a regular basis.`,
    url: 'https://dotspresentations.com/services/presentation-design/',
    siteName: 'Dotspresentaions',
    images: [
      {
        url: 'https://i.ibb.co/tM39yJ3/meta.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Presentation Design - DOTS',
    description: `Connect With Your Audience, And Let Your Presentation Pop Our presentation design services are the solution that helps you create Engaging, Flawless, and Effective Presentations. On Budget. On-Time! The power of DOTS The power of DOTS Create Tailored Solutions Especially if you need to create multiple presentations on a regular basis.`,
    creator: '@dotsppts',
    images: ['https://i.ibb.co/tM39yJ3/meta.png'],
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
