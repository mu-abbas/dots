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
        url: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/800x600_Wallpaper_Blue_Sky.png',
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
    images: ['https://upload.wikimedia.org/wikipedia/commons/b/b5/800x600_Wallpaper_Blue_Sky.png'],
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
