import Footer from '@/components/footer/Footer';
import Header from '@/components/retainership/Header';
import Main from '@/components/retainership/Main';

export const metadata = {
  title: 'Retainership',
  description:
    'Dots Retainership Reliable, Efficient Delivery Every Time! Top Presentation Designers A dedicated team of highly skilled and experienced professionals with proven expertise in a wide range of industries. Fast Turnarounds A dedicated team of highly skilled and experienced professionals with proven expertise in a wide range of industries.',
  openGraph: {
    title: 'Retainership - DOTS',
    description:
      'Dots Retainership Reliable, Efficient Delivery Every Time! Top Presentation Designers A dedicated team of highly skilled and experienced professionals with proven expertise in a wide range of industries. Fast Turnarounds A dedicated team of highly skilled and experienced professionals with proven expertise in a wide range of industries.',
    url: 'https://dotspresentations.com/retainership',
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
    title: 'Retainership - DOTS',
    description:
      'Dots Retainership Reliable, Efficient Delivery Every Time! Top Presentation Designers A dedicated team of highly skilled and experienced professionals with proven expertise in a wide range of industries. Fast Turnarounds A dedicated team of highly skilled and experienced professionals with proven expertise in a wide range of industries.',
    creator: '@dotsppts',
    images: ['https://upload.wikimedia.org/wikipedia/commons/b/b5/800x600_Wallpaper_Blue_Sky.png'],
  },
};
function Retainership() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default Retainership;
