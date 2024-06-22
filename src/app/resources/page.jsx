import Footer from '@/components/footer/Footer';
import Header from '@/components/resources/Header';
import Main from '@/components/resources/Main';

export const metadata = {
  title: 'Resources',
  description:
    'Learn more with Dots Tips and Tricks Latest Articles 7 Proven Strategies to Create Winning Presentations Ready to start the project? Connect with Dots.',
  openGraph: {
    title: 'Resources - DOTS',
    description:
      'Learn more with Dots Tips and Tricks Latest Articles 7 Proven Strategies to Create Winning Presentations Ready to start the project? Connect with Dots.',
    url: 'https://dotspresentations.com/resources',
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
    title: 'Resources - DOTS',
    description:
      'Learn more with Dots Tips and Tricks Latest Articles 7 Proven Strategies to Create Winning Presentations Ready to start the project? Connect with Dots.',
    creator: '@dotsppts',
    images: ['https://upload.wikimedia.org/wikipedia/commons/b/b5/800x600_Wallpaper_Blue_Sky.png'],
  },
};

function resources() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default resources;
