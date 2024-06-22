import Footer from '@/components/footer/Footer';
import Header from '@/components/home/Header';
import Main from '@/components/home/Main';

export const metadata = {
  title: 'Home Page - DOTS',
  description:
    'Your Story. Your Goals. Connected. Make your next presentation stand out with our Professional, Time-Saving, and price competitive services.',
  openGraph: {
    title: 'Home Page - DOTS',
    description: `Your Story. Your Goals. Connected. Make your next presentation stand out with our Professional, Time-Saving, and price competitive services.`,
    url: 'https://dotspresentations.com/',
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
    title: 'Home Page - DOTS',
    description: `Your Story. Your Goals. Connected. Make your next presentation stand out with our Professional, Time-Saving, and price competitive services.`,
    creator: '@dotsppts',
    images: ['https://upload.wikimedia.org/wikipedia/commons/b/b5/800x600_Wallpaper_Blue_Sky.png'],
  },
};

function HomePage() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default HomePage;
