import Footer from '@/components/footer/Footer';
import Header from '@/components/services/Header';
import Main from '@/components/services/Main';

export const metadata = {
  title: 'Services',
  description:
    'The Visual Way to Communicate Your Message Presentation Design Services Presentation Design Services We use our creativity, expertise, and passion to connect the dots and bring your stories to life. The Visual Way to Communicate Your Message We use our creativity, expertise, and passion to connect the dots and bring your stories to life.',
  openGraph: {
    title: 'Services - DOTS',
    description: `The Visual Way to Communicate Your Message Presentation Design Services Presentation Design Services We use our creativity, expertise, and passion to connect the dots and bring your stories to life. The Visual Way to Communicate Your Message We use our creativity, expertise, and passion to connect the dots and bring your stories to life.`,
    url: 'https://dotspresentations.com/services/',
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
    title: 'Services - DOTS',
    description: `The Visual Way to Communicate Your Message Presentation Design Services Presentation Design Services We use our creativity, expertise, and passion to connect the dots and bring your stories to life. The Visual Way to Communicate Your Message We use our creativity, expertise, and passion to connect the dots and bring your stories to life.`,
    creator: '@dotsppts',
    images: ['https://upload.wikimedia.org/wikipedia/commons/b/b5/800x600_Wallpaper_Blue_Sky.png'],
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
