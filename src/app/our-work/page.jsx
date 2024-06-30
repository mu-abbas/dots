import Footer from '@/components/footer/Footer';
import Header from '@/components/our-work/Header';
import Main from '@/components/our-work/Main';

export const metadata = {
  title: 'Our Work',
  description:
    'Creating presentations that gets you noticed AllPresentation DesignPitch DecksPresentation TemplatesDocument Design Topo Chico Marriot BOD Venus Presentation Surgio Health Marriot CEC Cloud Flyer League of Play SMS Oversubscribe Decast Gruppi CollectionXYZ Stake Sauce Marriot DRES Novonordisk BIG Marriot Event template Venus template Dolormin template Together E-book Y20 Whitepaper BIG Report Together Whitepaper.',
  openGraph: {
    title: 'Our Work - DOTS',
    description:
      'Creating presentations that gets you noticed AllPresentation DesignPitch DecksPresentation TemplatesDocument Design Topo Chico Marriot BOD Venus Presentation Surgio Health Marriot CEC Cloud Flyer League of Play SMS Oversubscribe Decast Gruppi CollectionXYZ Stake Sauce Marriot DRES Novonordisk BIG Marriot Event template Venus template Dolormin template Together E-book Y20 Whitepaper BIG Report Together Whitepaper.',
    url: 'https://dotspresentations.com/our-work',
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
    title: 'Our Work - DOTS',
    description:
      'Creating presentations that gets you noticed AllPresentation DesignPitch DecksPresentation TemplatesDocument Design Topo Chico Marriot BOD Venus Presentation Surgio Health Marriot CEC Cloud Flyer League of Play SMS Oversubscribe Decast Gruppi CollectionXYZ Stake Sauce Marriot DRES Novonordisk BIG Marriot Event template Venus template Dolormin template Together E-book Y20 Whitepaper BIG Report Together Whitepaper.',
    creator: '@dotsppts',
    images: ['https://i.ibb.co/tM39yJ3/meta.png'],
  },
};

function OurWork() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default OurWork;
